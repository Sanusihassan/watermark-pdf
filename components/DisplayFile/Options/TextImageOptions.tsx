"use client";
import { ReactNode, useCallback, useState } from "react";
import { Row } from "react-bootstrap";
export const THEME_COLOR = "#e55039";
import { Range } from "react-range";
import { ITrackProps, IThumbProps } from "react-range/lib/types";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "pretty-checkbox-react";
import { BsLayersHalf } from "react-icons/bs";
import AnglePicker from "./AnglePicker";
import { IoImageOutline } from "react-icons/io5";
import { TextFormat } from "./TextFormat";
import { ToolState, setOptions } from "@/src/store";
import { PositionGrid } from "./PositionGrid";
import { useFileStore } from "@/src/file-store";

export const TextImageOptions = ({ layout }: { layout: "text" | "image" }) => {
  const dispatch = useDispatch();
  const { setImageFile } = useFileStore();
  const [layerOption, setLayerOption] = useState<"below" | "over">("over");
  const options = useSelector(
    (state: { tool: ToolState }) => state.tool.options
  );
  const pageCount = useSelector(
    (state: { tool: ToolState }) => state.tool.pageCount
  );
  const handleCheckChange = useCallback(() => {
    // setChecked((prev) => !prev);
    dispatch(setOptions({ mosaic: !options.mosaic }));
  }, []);
  return (
    <div className="container text-options w-100 pt-2">
      <TextFormat layout={layout} />
      <button className={`add-image-btn${layout == "text" ? " d-none" : ""}`}>
        <input
          type="file"
          className="image-input"
          accept="image/*"
          onChange={(e) => {
            if (e.target.files) {
              setImageFile(e.target.files[0]);
            }
          }}
        />
        <div className="icon-container">
          <IoImageOutline className="icon" />
        </div>
        <span>Add Image</span>
      </button>
      <h6>Position</h6>
      <Row>
        <PositionGrid />
        <div className="mosaic col p-0">
          <Checkbox
            animation="smooth"
            color="primary"
            defaultChecked={options.mosaic}
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
            values={[options.opacity]}
            onChange={(values: number[]) => {
              dispatch(setOptions({ opacity: values[0] }));
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
      <h6>Pages</h6>
      <Row className="m-0 setting-col align-items-center from-to-page justify-content-between">
        <div className="input-group input from p-0">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              From Page
            </span>
          </div>
          <input
            type="number"
            className="form-control"
            min={0}
            max={pageCount}
            value={options.fromPage}
            onChange={(e) =>
              dispatch(setOptions({ fromPage: e.target.valueAsNumber }))
            }
          />
        </div>
        <div className="input-group input p-0">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              To
            </span>
          </div>
          <input
            type="number"
            className="form-control"
            min={0}
            max={pageCount}
            value={pageCount}
            onChange={(e) =>
              dispatch(setOptions({ toPage: e.target.valueAsNumber }))
            }
          />
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
