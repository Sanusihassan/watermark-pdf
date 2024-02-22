import axios from "axios";
import { Dispatch, RefObject } from "react";
import { downloadConvertedFile } from "../downloadFile";
import type { errors as _ } from "../../content";
import { AnyAction } from "@reduxjs/toolkit";
// import { shallow } from "zustand"
import {
  ToolState,
  resetErrorMessage,
  setField
} from "../store";

let prevSettings: ToolState["options"] = {
  text: "PDFEquips",
  font: "arial",
  fontSize: 16,
  color: "#000000FF",
  position: "top left",
  mosaic: false,
  opacity: 1,
  angle: 30,
  fromPage: 1,
  toPage: null,
  isBold: false,
  isItalic: false,
  isUnderlined: false,
  layer: "over",
};
export const handleUpload = async (
  e: React.FormEvent<HTMLFormElement>,
  downloadBtn: RefObject<HTMLAnchorElement>,
  dispatch: Dispatch<AnyAction>,
  state: {
    path: string;
    errorMessage: string;
  },
  files: File[],
  errors: _,
  filesOnSubmit: string[],
  setFilesOnSubmit: (value: string[]) => void,
  options: ToolState["options"],
  imageFile: File | null
) => {
  e.preventDefault();
  dispatch(setField({ isSubmitted: true }));

  if (!files) return;
  // Extract file names from the File[] array
  const fileNames = files.map((file) => file.name);

  // Check if every file name in files is present in filesOnSubmit
  const allFilesPresent = fileNames.every((fileName) =>
    filesOnSubmit.includes(fileName)
  );

  if (
    allFilesPresent &&
    files.length === filesOnSubmit.length &&
    JSON.stringify(prevSettings) === JSON.stringify(options)
  ) {
    dispatch(setField({ showDownloadBtn: true }));
    dispatch(resetErrorMessage());
    return;
  }

  const formData = new FormData();
  for (let i = 0; i < files.length; i++) {
    formData.append("files", files[i]);
  }
  // append options
  formData.append("options", JSON.stringify(options));
  // how to set the Content-type to multipart/formdata
  formData.append("imageFile", imageFile as File);
  let url;
  // @ts-ignore
  if (process.env.NODE_ENV === "development") {
    url = `https://5000-sanusihassa-pdfequipsap-dvdgm7zyxi2.ws-eu106.gitpod.io/api/${state.path}`;
    // url = `https://5000-planetcreat-pdfequipsap-te4zoi6qkr3.ws-eu102.gitpod.io/${state.path}`;
  } else {
    url = `/api/${state.path}`;
  }
  // if (state.errorMessage) {
  //   return;
  // }
  const originalFileName = files[0]?.name?.split(".").slice(0, -1).join(".");

  const mimeTypeLookupTable: {
    [key: string]: { outputFileMimeType: string; outputFileName: string };
  } = {
    "application/zip": {
      outputFileMimeType: "application/zip",
      outputFileName: `PDFEquips-${state.path}.zip`,
    },
    "application/pdf": {
      outputFileMimeType: "application/pdf",
      outputFileName: `${originalFileName}.pdf`,
    },
  };

  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      responseType: "arraybuffer" as "arraybuffer",
    };
    const response = await axios.post(url, formData, config);
    // const originalFileName = files[0]?.name?.split(".").slice(0, -1).join(".");
    const mimeType = response.data.type || response.headers["content-type"];
    const mimeTypeData = mimeTypeLookupTable[mimeType] || {
      outputFileMimeType: mimeType,
      outputFileName: "",
    };
    const { outputFileMimeType, outputFileName } = mimeTypeData;

    dispatch(setField({ showDownloadBtn: true }));
    downloadConvertedFile(
      response,
      outputFileMimeType,
      outputFileName,
      downloadBtn
    );
    setFilesOnSubmit(files.map((f) => f.name));
    prevSettings = options;

    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      dispatch(resetErrorMessage());
      dispatch(setField({ isSubmitted: false }));
    }
  } catch (error) {
    if ((error as { code: string }).code === "ERR_NETWORK") {
      dispatch(setField({ errorMessage: errors.ERR_NETWORK.message }));

      // return;
    }
    // dispatch(setField({ isSubmitted: false}));
  } finally {
    dispatch(setField({ isSubmitted: false }));
  }
};
