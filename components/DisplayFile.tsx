import { useEffect, useState } from "react";
import "react-tooltip/dist/react-tooltip.css";
import type { errors as _, edit_page } from "../src/content";
import Files from "./DisplayFile/Files";
import type { Paths } from "../src/content/content";
type propTypes = {
  extension: string;
  pages: string;
  page: string;
  lang: string;
  errors: _;
  edit_page: edit_page;
  drop_files: string;
  path: Paths;
};

const DisplayFile = ({
  extension,
  pages,
  page,
  lang,
  errors,
  edit_page,
  drop_files,
  path,
}: propTypes) => {
  useEffect(() => {}, [extension]);

  return (
    <>
      <Files
        errors={errors}
        drop_files={drop_files}
        path={path}
        fileCard={edit_page.fileCard}
      />
    </>
  );
};

export default DisplayFile;
