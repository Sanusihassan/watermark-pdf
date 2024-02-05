import React from "react";

import { ReactAnglePicker } from "react-angle-picker";
import { THEME_COLOR } from "./TextImageOptions";
import { useSelector } from "react-redux";
import { ToolState, setOptions } from "@/src/store";
import { useDispatch } from "react-redux";
const AnglePicker = () => {
  const dispatch = useDispatch();
  const setAngle = (angle: number) => {
    dispatch(setOptions({ angle }));
  };
  const angle = useSelector(
    (state: { tool: ToolState }) => state.tool.options.angle
  );
  return (
    <div className="angle-picker">
      <div>{angle}º</div>
      <ReactAnglePicker
        value={angle}
        onChange={setAngle}
        onAfterChange={setAngle}
        width={75}
        pointerWidth={15}
        pointerColor={THEME_COLOR}
        borderColor="#ccc"
        borderWidth={3.5}
      />
    </div>
  );
};

export default AnglePicker;
