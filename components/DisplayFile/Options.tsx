// Options.tsx (add-watermark) - COMPLETE FILE
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import type { StylesConfig } from "react-select";
import { HexColorPicker } from "react-colorful";
import {
  Type,
  Image as ImageIcon,
  Grid3x3,
  Layers,
  Trash2,
  RotateCw,
} from "lucide-react";
import { setField, type ToolState } from "../../src/store";
import { useFileStore } from "../../src/file-store";
import type { edit_page } from "../../src/content";
import AnglePicker from "./AnglePicker";
import { CTABtn } from "./Options/CTABtn";

const THEME_COLOR = "#e55039";
const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5MB max for watermark images
const RECOMMENDED_IMAGE_SIZE = 1 * 1024 * 1024; // 1MB recommended

// ============ TYPES ============
interface WatermarkSettings {
  type: "text" | "image";
  text: string;
  font: string;
  fontSize: number;
  color: string;
  position: number;
  mosaic: boolean;
  opacity: number;
  rotation: number;
  fromPage: number;
  toPage: number;
  layer: "over" | "below";
}

interface OptionsProps {
  content: edit_page["options"];
  cta: string;
  lang: string;
}

interface PositionGridProps {
  selectedPosition: number;
  onPositionChange: (position: number) => void;
  themeColor: string;
}

interface ColorPickerProps {
  color: string;
  onChange: (color: string) => void;
  label: string;
}

interface CustomCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  themeColor: string;
}

// ============ SELECT STYLES ============
const customSelectStyles: StylesConfig<any, false> = {
  control: (base) => ({
    ...base,
    borderColor: "#e5e7eb",
    boxShadow: "none",
    "&:hover": {
      borderColor: THEME_COLOR,
    },
    cursor: "pointer",
    minHeight: "42px",
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected
      ? THEME_COLOR
      : state.isFocused
        ? "#fee2e2"
        : "white",
    color: state.isSelected ? "white" : "black",
    cursor: "pointer",
  }),
};

// ============ FONT OPTIONS ============
const fontOptions = [
  { value: "Arial", label: "Arial" },
  { value: "Helvetica", label: "Helvetica" },
  { value: "Times New Roman", label: "Times New Roman" },
  { value: "Courier New", label: "Courier New" },
  { value: "Georgia", label: "Georgia" },
  { value: "Verdana", label: "Verdana" },
  { value: "Comic Sans MS", label: "Comic Sans MS" },
  { value: "Impact", label: "Impact" },
];

// ============ FONT SIZE OPTIONS ============
const fontSizeOptions = [
  { value: 12, label: "12" },
  { value: 14, label: "14" },
  { value: 16, label: "16" },
  { value: 18, label: "18" },
  { value: 20, label: "20" },
  { value: 24, label: "24" },
  { value: 28, label: "28" },
  { value: 32, label: "32" },
  { value: 36, label: "36" },
  { value: 48, label: "48" },
  { value: 64, label: "64" },
  { value: 72, label: "72" },
];

// ============ POSITION GRID COMPONENT ============
const PositionGrid = ({
  selectedPosition,
  onPositionChange,
  themeColor,
}: PositionGridProps) => {
  return (
    <div className="grid grid-cols-3 gap-0 border-2 border-dashed border-gray-300 rounded-lg overflow-hidden max-w-xs mx-auto">
      {Array.from({ length: 9 }).map((_, index) => (
        <button
          key={index}
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPositionChange(index);
          }}
          className={`aspect-square border border-dashed border-gray-300 flex items-center justify-center transition-all hover:bg-gray-50 ${
            selectedPosition === index ? "bg-opacity-20" : ""
          }`}
          style={{
            backgroundColor:
              selectedPosition === index ? `${themeColor}30` : undefined,
          }}
        >
          <div
            className={`w-2 h-2 rounded-full transition-all ${
              selectedPosition === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundColor:
                selectedPosition === index ? themeColor : undefined,
            }}
          />
        </button>
      ))}
    </div>
  );
};

// ============ COLOR PICKER COMPONENT ============
const ColorPicker = ({ color, onChange, label }: ColorPickerProps) => {
  const [showPicker, setShowPicker] = useState(false);

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setShowPicker(!showPicker);
        }}
        className="w-full h-12 rounded-lg border-2 border-gray-300 flex items-center gap-3 px-3 hover:border-gray-400 transition-colors"
      >
        <div
          className="w-8 h-8 rounded border border-gray-300"
          style={{ backgroundColor: color }}
        />
        <span className="text-sm font-mono text-gray-700 uppercase">
          {color}
        </span>
      </button>
      {showPicker && (
        <div className="absolute z-50 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 p-3">
          <HexColorPicker color={color} onChange={onChange} />
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowPicker(false);
            }}
            className="mt-3 w-full px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors"
            style={{ backgroundColor: THEME_COLOR }}
          >
            {label}
          </button>
        </div>
      )}
    </div>
  );
};

// ============ CUSTOM CHECKBOX COMPONENT ============
const CustomCheckbox = ({
  checked,
  onChange,
  label,
  themeColor,
}: CustomCheckboxProps) => {
  return (
    <label
      className="d-flex items-center gap-3 cursor-pointer group"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => {
            e.stopPropagation();
            onChange(e.target.checked);
          }}
          className="sr-only peer"
        />
        <div
          className={`w-6 h-6 border-2 rounded-md flex items-center justify-center transition-all peer-focus:ring-2 peer-focus:ring-offset-2 ${
            checked
              ? "border-transparent shadow-sm"
              : "border-gray-300 bg-white group-hover:border-gray-400"
          }`}
          style={{
            backgroundColor: checked ? themeColor : undefined,
            outlineColor: checked ? `${themeColor}40` : undefined,
          }}
        >
          {checked && (
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
      </div>
      <span className="text-sm font-medium text-gray-700 select-none">
        {label}
      </span>
    </label>
  );
};

// ============ MAIN COMPONENT ============
const Options = ({ content, cta, lang }: OptionsProps) => {
  const dispatch = useDispatch();
  const { watermarkImage, setWatermarkImage } = useFileStore();
  const [imagePreview, setImagePreview] = useState<string>("");
  const [imageError, setImageError] = useState<string>("");

  const watermarkSettings = useSelector(
    (state: { tool: ToolState }) => state.tool.watermarkSettings,
  ) as WatermarkSettings;
  const limitationMsg = useSelector(
    (state: { tool: ToolState }) => state.tool.limitationMsg,
  );

  const pageCount = useSelector(
    (state: { tool: ToolState }) => state.tool.pageCount,
  );

  const updateSettings = (updates: Partial<WatermarkSettings>) => {
    dispatch(
      setField({ watermarkSettings: { ...watermarkSettings, ...updates } }),
    );
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const file = e.target.files?.[0];

    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        setImageError(
          content.invalid_image_type || "Please select a valid image file",
        );
        return;
      }

      // Validate file size
      if (file.size > MAX_IMAGE_SIZE) {
        setImageError(
          content.image_too_large ||
            `Image is too large (${(file.size / 1024 / 1024).toFixed(
              2,
            )}MB). Maximum size is 5MB.`,
        );
        return;
      }

      // Show warning if larger than recommended
      if (file.size > RECOMMENDED_IMAGE_SIZE) {
        console.warn(
          `Watermark image is ${(file.size / 1024 / 1024).toFixed(
            2,
          )}MB. Recommended size is 1MB or less for better performance.`,
        );
      }

      // Clear any previous errors
      setImageError("");

      // Set the image
      setWatermarkImage(file);

      // Create preview
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setWatermarkImage(null);
    setImagePreview("");
    setImageError("");
  };

  useEffect(() => {
    if (pageCount && pageCount > 0) {
      updateSettings({ toPage: pageCount });
    }
  }, [pageCount]);

  return (
    <div className="options-container p-6 space-y-6">
      {/* Type Selector */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          {content.watermark_type}
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              updateSettings({ type: "text" });
            }}
            className={`flex flex-col items-center gap-3 p-4 rounded-lg border-2 transition-all ${
              watermarkSettings.type === "text"
                ? "border-[#e55039] bg-[#e5503910]"
                : "border-gray-300 opacity-50 hover:opacity-100"
            }`}
          >
            <Type size={32} style={{ color: THEME_COLOR }} />
            <span className="font-medium text-gray-700">
              {content.place_text}
            </span>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              updateSettings({ type: "image" });
            }}
            className={`flex flex-col items-center gap-3 p-4 rounded-lg border-2 transition-all ${
              watermarkSettings.type === "image"
                ? "border-[#e55039] bg-[#e5503910]"
                : "border-gray-300 opacity-50 hover:opacity-100"
            }`}
          >
            <ImageIcon size={32} style={{ color: THEME_COLOR }} />
            <span className="font-medium text-gray-700">
              {content.place_image}
            </span>
          </button>
        </div>
      </div>

      {/* Text Input */}
      {watermarkSettings.type === "text" && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {content.text_input}
          </label>
          <input
            type="text"
            value={watermarkSettings.text}
            onChange={(e) => updateSettings({ text: e.target.value })}
            onClick={(e) => e.stopPropagation()}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#e55039] focus:outline-none transition-colors"
            placeholder="PDFEquips"
          />
        </div>
      )}

      {/* Image Upload with Validation */}
      {watermarkSettings.type === "image" && (
        <div className="flex flex-col items-center gap-3">
          {/* Show error message */}
          {imageError && (
            <div className="w-full max-w-sm px-4 py-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-700">{imageError}</p>
            </div>
          )}

          {watermarkImage && imagePreview ? (
            <div className="relative flex items-center gap-3 p-4 border-2 border-gray-300 rounded-lg max-w-sm w-full">
              <img
                src={imagePreview}
                alt="Watermark"
                className="w-16 h-16 object-contain"
              />
              <div className="flex-1 min-w-0">
                <span className="block text-sm text-gray-700 truncate">
                  {watermarkImage.name}
                </span>
                <span className="block text-xs text-gray-500">
                  {(watermarkImage.size / 1024).toFixed(0)} KB
                </span>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveImage();
                }}
                className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors shrink-0"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ) : (
            <label
              className="flex flex-col items-center gap-3 p-8 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#e55039] transition-colors max-w-sm w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <ImageIcon size={48} className="text-gray-400" />
              <span className="text-sm text-gray-600 text-center">
                {content.select_image}
              </span>
              <span className="text-xs text-gray-500 text-center">
                {content.max_5mb || "Max 5MB, recommended 1MB or less"}
              </span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                onClick={(e) => e.stopPropagation()}
                className="hidden"
              />
            </label>
          )}
        </div>
      )}

      {/* Text Format */}
      {watermarkSettings.type === "text" && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">
            {content.text_format}
          </h3>

          <div className="grid grid-cols-2 gap-4">
            {/* Font */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {content.font}
              </label>
              <Select
                value={fontOptions.find(
                  (f) => f.value === watermarkSettings.font,
                )}
                onChange={(option) =>
                  option && updateSettings({ font: option.value })
                }
                options={fontOptions}
                styles={customSelectStyles}
                isSearchable={false}
              />
            </div>

            {/* Font Size */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {content.font_size}
              </label>
              <Select
                value={fontSizeOptions.find(
                  (f) => f.value === watermarkSettings.fontSize,
                )}
                onChange={(option) =>
                  option && updateSettings({ fontSize: option.value })
                }
                options={fontSizeOptions}
                styles={customSelectStyles}
                isSearchable={false}
              />
            </div>
          </div>

          {/* Color */}
          <ColorPicker
            color={watermarkSettings.color}
            onChange={(color) => updateSettings({ color })}
            label={content.color}
          />
        </div>
      )}

      {/* Position */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3 text-center">
          <Grid3x3 size={16} className="inline mr-2" />
          {content.position}
        </label>
        <PositionGrid
          selectedPosition={watermarkSettings.position}
          onPositionChange={(position) => updateSettings({ position })}
          themeColor={THEME_COLOR}
        />
      </div>

      {/* Custom Styled Mosaic Checkbox */}
      <CustomCheckbox
        checked={watermarkSettings.mosaic}
        onChange={(checked) => updateSettings({ mosaic: checked })}
        label={content.mosaic}
        themeColor={THEME_COLOR}
      />

      {/* Opacity (0-1) */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-medium text-gray-700">
            {content.opacity}
          </label>
          <span className="text-sm font-semibold text-gray-900">
            {Math.round(watermarkSettings.opacity * 100)}%
          </span>
        </div>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={watermarkSettings.opacity}
          onChange={(e) =>
            updateSettings({ opacity: parseFloat(e.target.value) })
          }
          onClick={(e) => e.stopPropagation()}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#e55039]"
        />
      </div>

      {/* Rotation with Custom Angle Picker */}
      <div>
        <label className="text-sm font-medium text-gray-700 mb-3 text-center flex items-center justify-center gap-2">
          <RotateCw size={16} />
          {content.rotation}
        </label>
        <div className="flex justify-center">
          <AnglePicker
            angle={watermarkSettings.rotation}
            onChange={(angle) => updateSettings({ rotation: angle })}
            size={140}
            color={THEME_COLOR}
          />
        </div>
      </div>

      {/* Pages */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          {content.pages}
        </label>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-gray-600 mb-1">
              {content.from_page}
            </label>
            <input
              type="number"
              min="1"
              value={watermarkSettings.fromPage}
              onChange={(e) =>
                updateSettings({ fromPage: parseInt(e.target.value) || 1 })
              }
              onClick={(e) => e.stopPropagation()}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-[#e55039] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">
              {content.to_page}
            </label>
            <input
              type="number"
              min="1"
              value={watermarkSettings.toPage}
              onChange={(e) =>
                updateSettings({ toPage: parseInt(e.target.value) || 1 })
              }
              onClick={(e) => e.stopPropagation()}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-[#e55039] focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Layer */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          <Layers size={16} className="inline mr-2" />
          {content.layer}
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              updateSettings({ layer: "over" });
            }}
            className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all ${
              watermarkSettings.layer === "over"
                ? "border-[#e55039] bg-[#e5503910]"
                : "border-gray-300 opacity-50 hover:opacity-100"
            }`}
          >
            <Layers size={24} style={{ color: THEME_COLOR }} />
            <span className="text-sm font-medium text-gray-700">
              {content.over_content}
            </span>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              updateSettings({ layer: "below" });
            }}
            className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all ${
              watermarkSettings.layer === "below"
                ? "border-[#e55039] bg-[#e5503910]"
                : "border-gray-300 opacity-50 hover:opacity-100"
            }`}
          >
            <Layers
              size={24}
              style={{ color: THEME_COLOR, transform: "rotate(180deg)" }}
            />
            <span className="text-sm font-medium text-gray-700">
              {content.below_content}
            </span>
          </button>
        </div>
      </div>
      {limitationMsg ? (
        <div className="limitation-alert" role="alert">
          {limitationMsg}
          <CTABtn cta={cta} lang={lang} />
        </div>
      ) : null}
    </div>
  );
};

export default Options;
