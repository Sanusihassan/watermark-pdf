"use client";
import { ReactNode, useCallback, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Select, {
  CSSObjectWithLabel,
  GroupBase,
  OptionProps,
  StylesConfig,
} from "react-select";
export const THEME_COLOR = "#e55039";
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

import InputColor from "react-input-color";
import { Range } from "react-range";
import { ITrackProps, IThumbProps } from "react-range/lib/types";
import { useDispatch } from "react-redux";
import { Checkbox } from "pretty-checkbox-react";
import { BsLayersHalf } from "react-icons/bs";
import AnglePicker from "./AnglePicker";

export const TextOptions = () => {
  const [text, setText] = useState("pdfequips");
  const [font, setFont] = useState({ label: "Arial", value: "arial" });
  const [fontSize, setFontSize] = useState([16]);
  const [opacity, setOpacity] = useState([1]);
  const [position, setPosition] = useState(1);
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [layerOption, setLayerOption] = useState<"below" | "over">("over");
  /**
   * i want another similar object i.e with the same schema but for transparency
   * values: "transparency", "75%", "50%", "25%"
   */
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
  const posToStr = (pos: number): string => {
    let bulletPosition = "";
    switch (pos) {
      case 1:
      case 7:
        bulletPosition += "left";
        break;
      case 2:
      case 8:
        bulletPosition += "center";
        break;
      case 3:
      case 9:
        bulletPosition += "right";
        break;
    }
    return bulletPosition;
  };
  const handleSetPositoin = (p: number) => {
    let bulletPosition = "";
    const _p = p + 1;
    if ([1, 2, 3, 7, 8, 9].includes(_p)) {
      setPosition(p == 0 ? 1 : p + 1);
      if ([1, 2, 3].includes(_p)) {
        bulletPosition += "top ";
        bulletPosition += posToStr(_p);
      } else if ([7, 8, 9].includes(_p)) {
        bulletPosition += "bottom ";
        bulletPosition += posToStr(_p);
      }
    }
  };
  const handleCheckChange = useCallback(() => {
    setChecked((prev) => !prev);
  }, []);
  return (
    <div className="container text-options w-100 pt-2">
      <h6>Text</h6>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        className="form-control"
      />
      <h6>Text format</h6>
      <Row className="text-format-row m-0">
        <div className="font-setting-col font-col p-0">
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
        <div className="range-setting-col p-0">
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
              //   dispatch(setOptions({ color: color.hex }));
            }}
            placement="left"
          />
        </Col>
      </Row>
      <h6>Position</h6>
      <Row>
        <div className="boxes-container col p-0">
          {[...Array(9)].map((_, i) => (
            <div
              className={`box box-${i + 1}`}
              onClick={() => {
                handleSetPositoin(i);
              }}
              key={i}
            >
              {[4, 5, 6].includes(i + 1) ? (
                <button className="btn inner-box w-100 h-100" disabled></button>
              ) : (
                <div
                  className={`inner-box${
                    position == (i == 0 ? 1 : i + 1) ? " display" : ""
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
        <div className="mosaic col p-0">
          <Checkbox
            animation="smooth"
            color="primary"
            defaultChecked={checked}
            onChange={handleCheckChange}
            className="ml-1 my-3 mb-0"
          >
            Mosaic
          </Checkbox>
        </div>
      </Row>
      <Row className="m-0 setting-col opacity-rotation-setting">
        <div className="d-flex m-0 flex-column col p-0 opacity-column">
          <h6>Opacity</h6>
          <Range
            step={0.1}
            min={0}
            max={1}
            values={opacity}
            onChange={(values: number[]) => {
              setOpacity(values);
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
                  backgroundColor: THEME_COLOR,
                }}
              />
            )}
          />
        </div>
        <div className="angle-column d-flex m-0 flex-column col p-0">
          <h6>Rotation</h6>
          <AnglePicker />
        </div>
      </Row>
      <h6>Layer</h6>
      <Row className="m-0 layer-options">
        <div
          className={`d-flex m-0 flex-column col p-0 option${
            layerOption === "over" ? " active" : ""
          }`}
          onClick={() => setLayerOption("over")}
        >
          Over the PDF content
          <BsLayersHalf className="inverted btn-icon" />
        </div>
        <div
          className={`d-flex m-0 flex-column col p-0 option${
            layerOption === "below" ? " active" : ""
          }`}
          onClick={() => setLayerOption("below")}
        >
          Below the PDF content
          <BsLayersHalf className="btn-icon" />
        </div>
      </Row>
    </div>
  );
};
