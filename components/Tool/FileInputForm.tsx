import React, { useEffect, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
// store
import { ToolState, setOptions } from "../../src/store";
import { handleUpload } from "../../src/handlers/handleUpload";
import { handleChange } from "../../src/handlers/handleChange";
import { useFileStore } from "../../src/file-store";
// types
import type { tools } from "../../content";
import { validateFiles } from "../../src/utils";
import { ToolData } from "../Tool";
type AcceptedFileTypes = {
  [key in ".pdf"]: string;
};
interface FileInputFormProps {
  data: ToolData;
  acceptedFileTypes: AcceptedFileTypes;
  errors: any;
  lang: string;

  tools: tools;
}
export const FileInputForm: React.FC<FileInputFormProps> = ({
  data,
  acceptedFileTypes,
  errors,
  lang,
  tools,
}) => {
  const path = data.to.replace("/", "");
  const errorMessage = useSelector(
    (state: { tool: ToolState }) => state.tool.errorMessage
  );
  const options = useSelector(
    (state: { tool: ToolState }) => state.tool.options
  );
  const dispatch = useDispatch();
  // file store
  const {
    files,
    setFiles,
    setFileInput,
    setDownloadBtn,
    setSubmitBtn,
    filesOnSubmit,
    setFilesOnSubmit,
    imageFile,
  } = useFileStore();
  // refs
  const fileInput = useRef<HTMLInputElement>(null);
  const submitBtn = useRef<HTMLButtonElement>(null);
  const downloadBtn = useRef<HTMLAnchorElement>(null);
  const pageCount = useSelector(
    (state: { tool: ToolState }) => state.tool.pageCount
  );
  useEffect(() => {
    setFileInput(fileInput);
    setSubmitBtn(submitBtn);
    setDownloadBtn(downloadBtn);
    window.addEventListener("focus", () => {
      if (options.toPage === 0 && pageCount > 0) {
        dispatch(setOptions({ toPage: pageCount }));
      }
    });
  }, [pageCount]);
  return (
    <form
      onClick={(e) => {
        e.stopPropagation();
      }}
      onSubmit={(e) =>
        handleUpload(
          e,
          downloadBtn,
          dispatch,
          {
            path,
            errorMessage,
          },
          files,
          errors,
          filesOnSubmit,
          setFilesOnSubmit,
          options,
          imageFile
        )
      }
      method="POST"
      encType="multipart/form-data"
    >
      <div
        className={`upload-btn btn btn-lg text-white position-relative overflow-hidden ${data.to.replace("/", "")}`}
        onClick={(e) => {
          e.stopPropagation();
        }}
        role="button"
      >
        {lang == "ar" ? (
          <bdi>
            {tools.select} {tools.files}
            <span className="text-uppercase">
              {data.type.replace(".", "")}
            </span>{" "}
          </bdi>
        ) : (
          <bdi>
            {tools.select}{" "}
            <span className="text-uppercase">{data.type.replace(".", "")}</span>{" "}
            {tools.files}
          </bdi>
        )}
        <input
          type="file"
          name="files"
          accept={
            acceptedFileTypes[data.type as keyof typeof acceptedFileTypes]
          }
          // multiple={statePath !== "split-pdf" && statePath !== "pdf-to-pdf-a"}
          ref={fileInput}
          className="position-absolute file-input"
          onClick={(e) => {
            e.stopPropagation();
          }}
          onChange={(e) => {
            handleChange(e, dispatch, setFiles, data.type, errors, files, {
              path,
            });
          }}
        />
      </div>
      <a
        href=""
        className="d-none"
        ref={downloadBtn}
        download="__output.pdf"
      ></a>
      {/* <div className="my-4">
          </div> */}
      <button type="submit" ref={submitBtn} className="d-none">
        submit
      </button>
    </form>
  );
};
