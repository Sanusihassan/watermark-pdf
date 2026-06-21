// ============================================================================
// REFACTORED handleUpload.ts (watermark-pdf) - Using Blob Pattern
// ============================================================================

import axios from "axios";
import type { errors as _ } from "../../src/content";
import { resetErrorMessage, setField } from "../../src/store";
import type { Action, Dispatch } from "@reduxjs/toolkit/react";
import { parseErrorResponse } from "../../src/utils";
import { toast } from "react-toastify";

// ============================================================================
// FIX: Properly typed module variables (fixes TS7034)
// ============================================================================

let filesOnSubmit: string[] = [];
let prevState: string | null = null;

// ============================================================================
// HELPERS
// ============================================================================

interface UploadResponse {
  blob: Blob;
  mimeType: string;
}

async function sendRequest(
  url: string,
  formData: FormData
): Promise<UploadResponse> {
  try {
    const response = await axios.post(url, formData, {
      responseType: "blob",
      withCredentials: true,
      headers: { "Content-Type": "multipart/form-data" },
    });

    const blob = new Blob([response.data], {
      type: response.headers["content-type"] || "application/pdf",
    });

    return {
      blob,
      mimeType: response.headers["content-type"] || "application/pdf",
    };
  } catch (err: any) {
    // Error response might also be a Blob
    if (err.response?.data instanceof Blob) {
      try {
        const text = await err.response.data.text();
        err.response.data = JSON.parse(text);
      } catch (parseError) {
        console.error("Failed to parse error response:", parseError);
        err.response.data = { code: "SERVER_ERROR" };
      }
    }
    throw err;
  }
}

// ============================================================================
// MAIN HANDLER (Refactored)
// ============================================================================

export const handleUpload = async (
  e: React.SubmitEvent<HTMLFormElement>,
  // NOTE: downloadBtn parameter REMOVED
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
  errors: _,
  setDownloadBlob: (blob: Blob, filename: string) => void
) => {
  e.preventDefault();
  dispatch(setField({ isSubmitted: true }));

  if (!files || files.length === 0) {
    dispatch(setField({ isSubmitted: false }));
    return;
  }

  // ════════════════════════════════════════════════════════════════════════
  // watermark-pdf only accepts a single file
  // ════════════════════════════════════════════════════════════════════════

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

  // ════════════════════════════════════════════════════════════════════════
  // VALIDATION
  // ════════════════════════════════════════════════════════════════════════

  // Validate watermark settings exist
  if (!state.watermarkSettings) {
    dispatch(
      setField({
        errorMessage: errors.alerts?.noWatermarkSettings,
      })
    );
    dispatch(setField({ isSubmitted: false }));
    return;
  }

  // Validate text watermark
  if (
    state.watermarkSettings.type === "text" &&
    !state.watermarkSettings.text.trim()
  ) {
    dispatch(
      setField({
        errorMessage:
          errors.alerts?.noWatermarkText || "Please enter watermark text",
      })
    );
    dispatch(setField({ isSubmitted: false }));
    return;
  }

  // Validate image watermark
  if (state.watermarkSettings.type === "image" && !watermarkImage) {
    dispatch(
      setField({
        errorMessage:
          errors.alerts?.noWatermarkImage || "Please upload a watermark image",
      })
    );
    dispatch(setField({ isSubmitted: false }));
    return;
  }

  // Validate page range
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

  // ════════════════════════════════════════════════════════════════════════
  // PREPARE FORM DATA
  // ════════════════════════════════════════════════════════════════════════

  const formData = new FormData();

  // Add the PDF file
  formData.append("file", file);

  // Add watermark settings (as JSON string)
  formData.append("watermarkSettings", JSON.stringify(state.watermarkSettings));

  // Add watermark image (if type is image)
  if (state.watermarkSettings.type === "image" && watermarkImage) {
    formData.append("watermarkImage", watermarkImage);
  }

  // ════════════════════════════════════════════════════════════════════════
  // BUILD URL
  // ════════════════════════════════════════════════════════════════════════

  let url: string = "";
  let endpoint = "/api/";

  // @ts-ignore
  if (process.env.NODE_ENV === "development") {
    url = `http://localhost:8000${endpoint}${state.path}`;
  } else {
    url = `${endpoint}${state.path}`;
  }

  // Early exit if there's already an error
  if (state.errorMessage) {
    dispatch(setField({ isSubmitted: false }));
    return;
  }

  // Get original filename for download
  const originalFileName =
    state.fileName || file.name.split(".").slice(0, -1).join(".");

  // ════════════════════════════════════════════════════════════════════════
  // API Call & Blob Handling
  // ════════════════════════════════════════════════════════════════════════

  try {
    // NEW: Use sendRequest helper
    const { blob } = await sendRequest(url, formData);

    // ════════════════════════════════════════════════════════════════════════
    // watermark-pdf always returns a PDF
    // ════════════════════════════════════════════════════════════════════════

    const outputFileMimeType = "application/pdf";
    const outputFileName = `${originalFileName || "PDFEquips"}-watermarked.pdf`;

    // Ensure blob has correct PDF MIME type
    const typedBlob = new Blob([blob], {
      type: outputFileMimeType,
    });

    // ───────────────────────────────────────────────────────────────────────
    // NEW: Deferred download via setDownloadBlob
    // ───────────────────────────────────────────────────────────────────────
    setDownloadBlob(typedBlob, outputFileName);

    // Update tracking
    filesOnSubmit = files.map((f) => f.name);

    // Update UI state
    dispatch(setField({ showDownloadBtn: true }));
    dispatch(resetErrorMessage());
    dispatch(setField({ isSubmitted: false }));
  } catch (error) {
    // ───────────────────────────────────────────────────────────────────────
    // Error Handling
    // ───────────────────────────────────────────────────────────────────────

    if ((error as { code: string }).code === "ERR_NETWORK") {
      dispatch(setField({ errorMessage: errors.ERR_NETWORK.message }));
      dispatch(setField({ isSubmitted: false }));
      return;
    }

    // Handle server validation/auth errors
    if (axios.isAxiosError(error) && error.response) {
      try {
        // FIX: Properly type errorCode (fixes TS2538)
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

          // watermark-pdf specific errors
          NO_WATERMARK_SETTINGS:
            errors.alerts.noWatermarkSettings ||
            "No watermark settings provided",
          INVALID_WATERMARK_SETTINGS:
            errors.alerts.invalidWatermarkSettings ||
            "Invalid watermark settings format",
          NO_WATERMARK_TEXT:
            errors.alerts.noWatermarkText || "No watermark text provided",
          NO_WATERMARK_IMAGE:
            errors.alerts.noWatermarkImage || "No watermark image provided",
          INVALID_WATERMARK_IMAGE:
            errors.alerts.invalidWatermarkImage ||
            "Invalid watermark image format",
          INVALID_PAGE_RANGE:
            errors.alerts.invalidPageRange || "Invalid page range",
          PAGE_OUT_OF_RANGE:
            errors.alerts.pageOutOfRange ||
            "Page number exceeds PDF page count",
          INVALID_POSITION:
            errors.alerts.invalidPosition || "Invalid watermark position",
          INVALID_OPACITY:
            errors.alerts.invalidOpacity || "Invalid opacity value (0-100)",
          INVALID_ROTATION:
            errors.alerts.invalidRotation || "Invalid rotation value (0-360)",
          INVALID_FONT_SIZE:
            errors.alerts.invalidFontSize || "Invalid font size",
          WATERMARK_FAILED:
            errors.alerts.watermarkFailed ||
            "Failed to add watermark. Please try again.",

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
          MAX_PAGES_EXCEEDED:
            errors.MAX_PAGES_EXCEEDED?.message || "Maximum pages exceeded",
        };

        const { errorCode } = parseErrorResponse(error);

        // FIX: Check if errorCode exists before indexing (fixes TS2538)
        if (errorCode && errorCode in errorCodeMap) {
          const message = errorCodeMap[errorCode];
          dispatch(setField({ limitationMsg: message }));
          dispatch(setField({ errorCode }));
          dispatch(setField({ isSubmitted: false }));
          toast.error(message);
          return;
        }
      } catch {
        // Failed to parse error response
      }
    }

    dispatch(setField({ isSubmitted: false }));
  }
};