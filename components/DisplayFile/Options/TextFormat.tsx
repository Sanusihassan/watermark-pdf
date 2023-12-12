import { ReactNode, useState } from "react";
import { Row, Col } from "react-bootstrap";
import InputColor from "react-input-color";
import { ITrackProps, IThumbProps } from "react-range/lib/types";
export const customStyles: StylesConfig<
  { value: string; label: string },
  false
> = {
  option: (
    base: CSSObjectWithLabel,
    state: OptionProps<
      { value: string; label: string },
      false,
      GroupBase<{ value: string; label: string }>
    >
  ) => ({
    ...base,
    backgroundColor: state.isSelected ? THEME_COLOR : "white",
    cursor: "pointer",
  }),
};
import Select, {
  CSSObjectWithLabel,
  GroupBase,
  OptionProps,
  StylesConfig,
} from "react-select";
import { Range } from "react-range";
import { THEME_COLOR } from "./TextImageOptions";
import { ToolState, setOptions } from "@/src/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import type { edit_page } from "@/content";
export const TextFormat = ({ layout, text_format }: { layout: string, text_format: edit_page["options"]["text_format"] }) => {
  const [font, setFont] = useState({ label: "Arial", value: "arial" });
  const dispatch = useDispatch();
  const options = useSelector(
    (state: { tool: ToolState }) => state.tool.options
  );
  const fontOptions = [
    { label: "Arial", value: "arial" },
    { label: "Calibri", value: "calibri" },
    { label: "Comic Sans MS", value: "comic-sans-ms" },
    { label: "Courier New", value: "courier-new" },
    { label: "Georgia", value: "georgia" },
    { label: "Helvetica", value: "helvetica" },
    { label: "Impact", value: "impact" },
    { label: "Lucida Console", value: "lucida-console" },
    { label: "Tahoma", value: "tahoma" },
    { label: "Times New Roman", value: "times-new-roman" },
    { label: "Trebuchet MS", value: "trebuchet-ms" },
    { label: "Verdana", value: "verdana" },
  ];
  return (
    <>
      <div className={`${layout == "image" ? "d-none" : ""}`}>
        <h6>{text_format.text}</h6>
        <input
          value={options.text}
          onChange={(e) => dispatch(setOptions({ text: e.target.value }))}
          type="text"
          className="form-control"
        />
        <h6>{text_format.text_format}</h6>
        <Row>
          <span className="col text-center">{text_format.font}</span>
          <span className="col text-center">{text_format.font_size}</span>
          <span className="col text-center">{text_format.color}</span>
        </Row>
        <Row className="text-format-row m-0">
          <div className="font-setting-col font-col p-0">
            <Select
              className="font-dropdown"
              value={font}
              onChange={(newValue) => {
                if (newValue !== null) {
                  setFont(newValue);
                  dispatch(setOptions({ font: newValue.value }));
                } else {
                  setFont({ label: "Arial", value: "arial" });
                }
              }}
              options={fontOptions}
              styles={customStyles}
              placeholder={text_format.font_placeholder}
            />
          </div>
          <div className="range-setting-col p-0">
            <Range
              step={1}
              min={8}
              max={72}
              values={[options.fontSize]}
              onChange={(values: number[]) => {
                dispatch(setOptions({ fontSize: values[0] }));
              }}
              renderTrack={({
                props,
                children,
              }: {
                props: ITrackProps;
                children: ReactNode;
              }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    // direction: "rtl",
                    height: "6px",
                    width: "100%",
                    backgroundColor: "#ccc",
                  }}
                  className="range-track"
                >
                  {children}
                </div>
              )}
              renderThumb={({ props }: { props: IThumbProps }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "16px",
                    width: "16px",
                    borderRadius: "50%",
                    backgroundColor: THEME_COLOR,
                  }}
                />
              )}
            />
          </div>
          <Col className="color-setting-col p-0">
            <InputColor
              initialValue="#000000FF"
              onChange={(color) => {
                dispatch(setOptions({ color: color.hex }));
              }}
              placement="left"
            />
          </Col>
        </Row>
        <Row className="text-format-row m-0">
          <Col className="font-weight-setting-col">
            <button
              className={`btn${
                options.isBold ? " font-weight-bold" : ""
              } p-0 m-0`}
              onClick={() => {
                dispatch(setOptions({ isBold: !options.isBold }));
              }}
            >
              B
            </button>
          </Col>
          <Col className="font-setting-col">
            <button
              className={`btn${options.isItalic ? " font-italic" : ""} p-0 m-0`}
              style={{
                fontFamily: "serif",
              }}
              onClick={() => {
                dispatch(setOptions({ isItalic: !options.isItalic }));
              }}
            >
              I
            </button>
          </Col>
          <Col className="font-setting-col">
            <button
              className={`_btn${
                options.isUnderlined ? " text-underline" : ""
              } p-0 m-0`}
              onClick={() => {
                dispatch(setOptions({ isUnderlined: !options.isUnderlined }));
              }}
            >
              U
            </button>
          </Col>
        </Row>
      </div>
    </>
  );
};
