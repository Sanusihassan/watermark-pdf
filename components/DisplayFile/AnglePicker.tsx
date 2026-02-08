// components/AnglePicker.tsx
import { useState, useRef, useEffect } from "react";

interface AnglePickerProps {
  angle: number; // 0-360
  onChange: (angle: number) => void;
  size?: number;
  color?: string;
}

export const AnglePicker = ({
  angle,
  onChange,
  size = 120,
  color = "#e55039",
}: AnglePickerProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const circleRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDragging(true);
    updateAngle(e.clientX, e.clientY);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      updateAngle(e.clientX, e.clientY);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const updateAngle = (clientX: number, clientY: number) => {
    if (!circleRef.current) return;

    const rect = circleRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;

    let angleInRadians = Math.atan2(deltaY, deltaX);
    let angleInDegrees = (angleInRadians * 180) / Math.PI;

    // Convert to 0-360 range (0 degrees at top)
    angleInDegrees = (angleInDegrees + 90 + 360) % 360;

    onChange(Math.round(angleInDegrees));
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging]);

  // Calculate handle position
  const angleInRadians = ((angle - 90) * Math.PI) / 180;
  const handleRadius = (size / 2) * 0.8;
  const handleX = size / 2 + handleRadius * Math.cos(angleInRadians);
  const handleY = size / 2 + handleRadius * Math.sin(angleInRadians);

  return (
    <div
      ref={circleRef}
      className="relative inline-block cursor-pointer select-none"
      style={{ width: size, height: size }}
      onMouseDown={handleMouseDown}
    >
      {/* Outer Circle */}
      <div
        className="absolute inset-0 rounded-full border-4 border-gray-200 bg-white shadow-inner"
        style={{
          background: "linear-gradient(135deg, #f9fafb 0%, #ffffff 100%)",
        }}
      />

      {/* Tick Marks */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((tickAngle) => {
        const tickRadians = ((tickAngle - 90) * Math.PI) / 180;
        const tickRadius = (size / 2) * 0.75;
        const tickX = size / 2 + tickRadius * Math.cos(tickRadians);
        const tickY = size / 2 + tickRadius * Math.sin(tickRadians);

        return (
          <div
            key={tickAngle}
            className="absolute w-1 h-3 bg-gray-300 rounded-full"
            style={{
              left: tickX - 2,
              top: tickY - 6,
              transform: `rotate(${tickAngle}deg)`,
            }}
          />
        );
      })}

      {/* Center Point */}
      <div
        className="absolute w-3 h-3 rounded-full bg-gray-400"
        style={{
          left: size / 2 - 6,
          top: size / 2 - 6,
        }}
      />

      {/* Line from center to handle */}
      <svg
        className="absolute inset-0 pointer-events-none"
        width={size}
        height={size}
      >
        <line
          x1={size / 2}
          y1={size / 2}
          x2={handleX}
          y2={handleY}
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      {/* Handle */}
      <div
        className={`absolute w-6 h-6 rounded-full border-4 border-white shadow-lg transition-transform ${
          isDragging ? "scale-125" : "scale-100"
        }`}
        style={{
          left: handleX - 12,
          top: handleY - 12,
          backgroundColor: color,
          cursor: isDragging ? "grabbing" : "grab",
        }}
      />

      {/* Angle Display in Center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <div className="text-2xl font-bold" style={{ color }}>
            {angle}°
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnglePicker;
