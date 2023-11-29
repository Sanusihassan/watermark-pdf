import { ReactNode, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Select, {
  CSSObjectWithLabel,
  GroupBase,
  OptionProps,
  StylesConfig,
} from "react-select";

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
    backgroundColor: state.isSelected ? "#e55039" : "white",
    cursor: "pointer",
  }),
};

import InputColor from "react-input-color";
import { Range } from "react-range";
import { ITrackProps, IThumbProps } from "react-range/lib/types";
import { useDispatch } from "react-redux";

export const TextOptions = () => {
  const [text, setText] = useState("pdfequips");
  const [font, setFont] = useState({ label: "Arial", value: "arial" });
  const [fontSize, setFontSize] = useState([16]);
  const dispatch = useDispatch();
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
      <h6>Text</h6>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        className="form-control"
      />
      <h6>Text format</h6>
      <Row className="sytle-settings-row justify-content-between">
        <div className="font-setting-col font-col">
          <Select
            className="font-dropdown"
            value={font}
            onChange={(newValue) => {
              if (newValue !== null) {
                setFont(newValue);
                // dispatch(setOptions({ font: newValue.value }));
              } else {
                setFont({ label: "Arial", value: "arial" });
              }
            }}
            options={fontOptions}
            styles={customStyles}
            placeholder={"font"}
          />
        </div>
        <div className="range-setting-col">
          <Range
            step={1}
            min={8}
            max={72}
            values={fontSize}
            onChange={(values: number[]) => {
              setFontSize(values);
              //   dispatch(setOptions({ fontSize: values[0] }));
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
                  backgroundColor: "#b71540",
                }}
              />
            )}
          />
        </div>
        <Col className="color-setting-col">
          <InputColor
            initialValue="#000000FF"
            onChange={(color) => {
              //   dispatch(setOptions({ color: color.hex }));
            }}
            placement="left"
          />
        </Col>
      </Row>
    </>
  );
};
