import { createSlice, createSelector, type Draft, type PayloadAction } from "@reduxjs/toolkit";

type WritableDraft<T> = {
  -readonly [K in keyof T]: Draft<T[K]>;
};

type k = keyof WritableDraft<ToolState>;

export interface WatermarkSettings {
  type: "text" | "image";
  text: string;
  font: string;
  fontSize: number;
  color: string;
  position: number; // 0-8 (grid position)
  mosaic: boolean;
  opacity: number; // 0-100
  rotation: number; // 0-360
  fromPage: number;
  toPage: number;
  layer: "over" | "below";
}

export interface ToolState {
  showTool: boolean;
  isSubmitted: boolean;
  errorMessage: string;
  errorCode: string | null;
  showDownloadBtn: boolean;
  showOptions: boolean;
  fileName: string;
  limitationMsg: string;
  rotations: { k: string; r: number }[];
  passwords: { k: string; p: string }[];
  subscriptionStatus: boolean | null;
  isAdBlocked: boolean;
  ocr_warning: string;
  watermarkSettings: WatermarkSettings;
  pageCount: number;
  selectedFile: string
}

const initialState: ToolState = {
  showTool: true,
  errorMessage: "",
  isSubmitted: false,
  errorCode: null,
  showDownloadBtn: false,
  showOptions: false,
  fileName: "",
  limitationMsg: "",
  rotations: [],
  passwords: [],
  subscriptionStatus: null,
  isAdBlocked: false,
  ocr_warning: "",
  watermarkSettings: {
    type: "text",
    text: "PDFEquips",
    font: "Arial",
    fontSize: 36,
    color: "#000000",
    position: 4, // Center
    mosaic: false,
    opacity: .5,
    rotation: 0,
    fromPage: 1,
    toPage: 1,
    layer: "over",
  },
  pageCount: 0,
  selectedFile: ""
};

const toolSlice = createSlice({
  name: "tool",
  initialState,
  reducers: {
    resetErrorMessage(state: ToolState) {
      state.errorMessage = "";
      state.errorCode = null;
      state.isSubmitted = false;
    },
    setField(state, action: PayloadAction<Partial<ToolState>>) {
      Object.keys(action.payload).forEach((key) => {
        const typedKey = key as k;
        const value = action.payload[typedKey];
        if (value !== undefined) {
          // @ts-ignore
          state[typedKey] = value;
        }
      });
    },
  },
});

export const { resetErrorMessage, setField } = toolSlice.actions;

// ============================================
// MEMOIZED SELECTORS (prevent unnecessary rerenders)
// ============================================

/**
 * Select the entire tool state
 */
export const selectToolState = (state: { tool: ToolState }) => state.tool;

export const selectRotations = createSelector(
  [selectToolState],
  (state) => state.rotations
);

export const selectPasswords = createSelector(
  [selectToolState],
  (state) => state.passwords
);


export default toolSlice.reducer;