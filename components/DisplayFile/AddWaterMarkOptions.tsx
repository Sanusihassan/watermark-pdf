import { MdFormatColorText } from "react-icons/md";
import { IoImageOutline } from "react-icons/io5";
import { useState } from "react";
import { TextImageOptions } from "./Options/TextImageOptions";
import type { edit_page } from "@/content";

type WaterMarkType = "text" | "image";

export const AddWaterMarkOptions = ({options}: {
  options: edit_page["options"]
}) => {
  const [type, setType] = useState<WaterMarkType>("text");
  return (
    <div className="add-watermark-options">
      <div className="d-flex flex-row btn-row">
        <button
          className={`button p3${type === "text" ? " active" : ""}`}
          onClick={() => setType("text")}
        >
          <MdFormatColorText className="icon btn-icon" />
          Place text
        </button>
        <button
          className={`button p3${type === "image" ? " active" : ""}`}
          onClick={() => setType("image")}
        >
          <IoImageOutline className="icon btn-icon" />
          Place image
        </button>
      </div>
      <TextImageOptions content={options} layout={type} />
    </div>
  );
};
