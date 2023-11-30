import React from "react";

import { ReactAnglePicker } from "react-angle-picker";
import { THEME_COLOR } from "./TextOptions";
const AnglePicker = () => {
  const [angle, setAngle] = React.useState(30);
  return (
    <div>
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
