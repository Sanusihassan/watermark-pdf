import { setOptions } from "@/src/store";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const PositionGrid = () => {
  const [position, setPosition] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    //
  }, [position]);
  const posToStr = (pos: number): string => {
    let bulletPosition = "";
    switch (pos) {
      case 1:
      case 7:
      case 4:
        bulletPosition += "left";
        break;
      case 2:
      case 5:
      case 8:
        bulletPosition += "center";
        break;
      case 3:
      case 6:
      case 9:
        bulletPosition += "right";
        break;
    }
    return bulletPosition;
  };
  const handleSetPositoin = (p: number) => {
    let bulletPosition = "";
    const _p = p + 1;
    setPosition(p == 0 ? 1 : p + 1);
    if ([1, 2, 3].includes(_p)) {
      bulletPosition += "top ";
      bulletPosition += posToStr(_p);
    } else if ([4, 5, 6].includes(_p)) {
      bulletPosition += "middle ";
      bulletPosition += posToStr(_p);
    } else if ([7, 8, 9].includes(_p)) {
      bulletPosition += "bottom ";
      bulletPosition += posToStr(_p);
    }
    dispatch(setOptions({ position: bulletPosition }));
  };
  return (
    <div className="boxes-container col p-0">
      {[...Array(9)].map((_, i) => (
        <div
          className={`box box-${i + 1}`}
          onClick={() => {
            handleSetPositoin(i);
          }}
          key={i}
        >
          <div
            className={`inner-box${
              position == (i == 0 ? 1 : i + 1) ? " display" : ""
            }`}
          ></div>
        </div>
      ))}
    </div>
  );
};
