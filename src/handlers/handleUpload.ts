// apps/add-watermark/handleUpload.ts
import axios from "axios";
import { downloadConvertedFile } from "../../src/downloadFile";
import type { errors as _ } from "../../src/content";
import { resetErrorMessage, setField } from "../../src/store";
import type { Action, Dispatch } from "@reduxjs/toolkit/react";
import { parseErrorResponse } from "../../src/utils";
import { toast } from "react-toastify";

let filesOnSubmit: string[] = [];
let prevState: string | null = null;

export const handleUpload = async (
  e: React.SubmitEvent<HTMLFormElement>,
  downloadBtn: React.RefObject<HTMLAnchorElement | null>,
  dispatch: Dispatch<Action>,
  state: {
    path: string;
    errorMessage: string;
    fileName: string;
    watermarkSettings: {
      type: "text" | "image";
      text: string;
      font: string;
      fontSize: number;
      color: string;
      position: number;
      mosaic: boolean;
      opacity: number;
      rotation: number;
      fromPage: number;
      toPage: number;
      layer: "over" | "below";
    };
  },
  files: File[],
  watermarkImage: File | null,
  errors: _
) => {
  e.preventDefault();
  dispatch(setField({ isSubmitted: true }));

  if (!files || files.length === 0) return;

  // ✅ add-watermark only accepts a single file
  const file = files[0];

  // Check if we can reuse previous result
  const fileNames = files.map((file) => file.name);
  const allFilesPresent = fileNames.every((fileName) =>
    filesOnSubmit.includes(fileName)
  );
  const strState = JSON.stringify(state);

  if (
    allFilesPresent &&
    files.length === filesOnSubmit.length &&
    prevState === strState
  ) {
    dispatch(setField({ showDownloadBtn: true }));
    dispatch(resetErrorMessage());
    return;
  }
  prevState = strState;

  // ✅ Validate watermark settings
  if (!state.watermarkSettings) {
    dispatch(
      setField({
        errorMessage:
          errors.alerts?.noWatermarkSettings,
      })
    );
    dispatch(setField({ isSubmitted: false }));
    return;
  }

  // ✅ Validate text watermark
  if (
    state.watermarkSettings.type === "text" &&
    !state.watermarkSettings.text.trim()
  ) {
    dispatch(
      setField({
        errorMessage:
          errors.alerts?.noWatermarkText ||
          "Please enter watermark text",
      })
    );
    dispatch(setField({ isSubmitted: false }));
    return;
  }

  // ✅ Validate image watermark
  if (state.watermarkSettings.type === "image" && !watermarkImage) {
    dispatch(
      setField({
        errorMessage:
          errors.alerts?.noWatermarkImage ||
          "Please upload a watermark image",
      })
    );
    dispatch(setField({ isSubmitted: false }));
    return;
  }

  // ✅ Validate page range
  if (
    state.watermarkSettings.fromPage > state.watermarkSettings.toPage ||
    state.watermarkSettings.fromPage < 1
  ) {
    dispatch(
      setField({
        errorMessage:
          errors.alerts?.invalidPageRange || "Invalid page range",
      })
    );
    dispatch(setField({ isSubmitted: false }));
    return;
  }

  // ✅ Prepare form data
  const formData = new FormData();

  // Add the PDF file
  formData.append("file", file);

  // Add watermark settings (as JSON string)
  formData.append("watermarkSettings", JSON.stringify(state.watermarkSettings));

  // Add watermark image (if type is image)
  if (state.watermarkSettings.type === "image" && watermarkImage) {
    formData.append("watermarkImage", watermarkImage);
  }

  let url: string = "";
  let endpoint = "/api/";

  // @ts-ignore
  if (process.env.NODE_ENV === "development") {
    url = `http://localhost:8000${endpoint}${state.path}`;
  } else {
    url = `${endpoint}${state.path}`;
  }

  if (state.errorMessage) {
    return;
  }

  const originalFileName =
    state.fileName || file.name.split(".").slice(0, -1).join(".");

  try {
    const response = await axios.post(url, formData, {
      responseType: "arraybuffer",
      withCredentials: true,
    });

    const mimeType = response.data.type || response.headers["content-type"];

    // ✅ add-watermark always returns a PDF
    const outputFileMimeType = "application/pdf";
    const outputFileName = `${originalFileName || "PDFEquips"}-watermarked.pdf`;

    dispatch(setField({ showDownloadBtn: true }));
    downloadConvertedFile(
      response,
      outputFileMimeType,
      outputFileName,
      downloadBtn
    );
    filesOnSubmit = files.map((f) => f.name);

    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      dispatch(resetErrorMessage());
      dispatch(setField({ isSubmitted: false }));
    }
  } catch (error) {
    if ((error as { code: string }).code === "ERR_NETWORK") {
      dispatch(setField({ errorMessage: errors.ERR_NETWORK.message }));
      return;
    }

    // Handle server validation/auth errors
    if (axios.isAxiosError(error) && error.response) {
      try {
        const errorCodeMap: Record<string, string> = {
          // General file validation errors
          NO_FILES_PROVIDED:
            errors.alerts.fileNotUploaded || "No files provided",
          FILE_NOT_UPLOADED:
            errors.alerts.fileNotUploaded || "File not uploaded",
          FILE_EMPTY: errors.alerts.fileEmpty || "File is empty",
          FILE_TOO_LARGE: errors.alerts.fileTooLarge || "File is too large",
          INVALID_FILE_TYPE:
            errors.alerts.invalidFileType || "Invalid file type",
          FILE_CORRUPT: errors.alerts.fileCorrupt || "File is corrupted",

          // PDF-specific errors
          INVALID_PDF: errors.alerts.invalidPdf || "Invalid PDF file",

          // ✅ add-watermark specific errors
          NO_WATERMARK_SETTINGS:
            errors.alerts.noWatermarkSettings ||
            "No watermark settings provided",
          INVALID_WATERMARK_SETTINGS:
            errors.alerts.invalidWatermarkSettings,
          NO_WATERMARK_TEXT:
            errors.alerts.noWatermarkText ||
            "No watermark text provided",
          NO_WATERMARK_IMAGE:
            errors.alerts.noWatermarkImage ||
            "No watermark image provided",
          INVALID_WATERMARK_IMAGE:
            errors.alerts.invalidWatermarkImage,
          INVALID_PAGE_RANGE:
            errors.alerts.invalidPageRange,
          PAGE_OUT_OF_RANGE:
            errors.alerts.pageOutOfRange,
          INVALID_POSITION:
            errors.alerts.invalidPosition,
          INVALID_OPACITY:
            errors.alerts.invalidOpacity,
          INVALID_ROTATION:
            errors.alerts.invalidRotation,
          INVALID_FONT_SIZE:
            errors.alerts.invalidFontSize,
          WATERMARK_FAILED:
            errors.alerts.watermarkFailed,

          // Auth errors
          UNAUTHORIZED:
            errors.alerts.authRequired || "Authentication required",
          INVALID_TOKEN:
            errors.alerts.invalidToken || "Invalid authentication token",
          AUTH_TOKEN_MISSING:
            errors.alerts.authRequired || "Authentication required",
          AUTH_TOKEN_EXPIRED:
            errors.alerts.sessionExpired ||
            "Session expired. Please sign in again.",
          AUTH_INVALID_TOKEN:
            errors.alerts.invalidToken || "Invalid authentication token",
          AUTH_USER_NOT_FOUND:
            errors.alerts.userNotFound || "User not found",
          AUTH_SERVER_ERROR:
            errors.alerts.authError || "Authentication error",

          // Server errors
          SERVER_CONFIG_ERROR:
            errors.alerts.serverError || "Server configuration error",

          // Other errors
          MAX_PAGES_EXCEEDED: errors.MAX_PAGES_EXCEEDED?.message,
        };

        const { errorCode } = parseErrorResponse(error);
        const message = errorCode ? errorCodeMap[errorCode as keyof typeof errorCodeMap] : null;

        if (message) {
          dispatch(setField({ limitationMsg: message }));
          dispatch(setField({ errorCode }));
          toast.error(message);
          return;
        }
      } catch {
        // Failed to parse error response
      }
    }

    dispatch(setField({ isSubmitted: false }));
  } finally {
    dispatch(setField({ isSubmitted: false }));
  }
};