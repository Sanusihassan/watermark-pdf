import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
type WritableDraft<T> = {
  -readonly [K in keyof T]: Draft<T[K]>;
};

type k = keyof WritableDraft<ToolState>;

type SettingsOptions = {
  text: string;
  font: string;
  fontSize: number;
  color: string;
  position: string;
  mosaic: boolean;
  opacity: number;
  angle: number;
  fromPage: number;
  toPage: number | null;
  isBold: boolean;
  isItalic: boolean;
  isUnderlined: boolean;
  layer: "below" | "over";
};

export interface ToolState {
  showTool: boolean;
  isSubmitted: boolean;
  errorMessage: string;
  showErrorMessage: boolean;
  errorCode: string | null;
  showDownloadBtn: boolean;
  showOptions: boolean;
  nav_height: number;
  options: SettingsOptions;
  pageCount: number;
}

const initialState: ToolState = {
  showTool: true,
  errorMessage: "",
  showErrorMessage: false,
  isSubmitted: false,
  errorCode: null,
  showDownloadBtn: false,
  showOptions: false,
  nav_height: 0,
  options: {
    text: "PDFEquips",
    font: "arial",
    fontSize: 16,
    color: "#000000FF",
    position: "top left",
    mosaic: false,
    opacity: 1,
    angle: 30,
    fromPage: 1,
    toPage: null,
    isBold: false,
    isItalic: false,
    isUnderlined: false,
    layer: "over",
  },
  pageCount: 0,
};

const toolSlice = createSlice({
  name: "tool",
  initialState,
  reducers: {
    resetErrorMessage(state: ToolState) {
      state.errorMessage = "";
      state.showErrorMessage = false;
      state.errorCode = null;
      state.isSubmitted = false;
    },
    setField(state, action: PayloadAction<Partial<ToolState>>) {
      Object.keys(action.payload).forEach((key) => {
        // Cast the key to keyof ToolState to ensure it's a valid key
        const typedKey = key as k;
        const value = action.payload[typedKey];
        if (value !== undefined) {
          // @ts-ignore
          state[typedKey] = value;
        }
      });
    },
    setOptions(
      state: ToolState,
      action: PayloadAction<Partial<SettingsOptions>>
    ) {
      state.options = {
        ...state.options,
        ...action.payload,
      };
    },
  },
});

export const {
  setField,
  resetErrorMessage,
  setOptions,
} = toolSlice.actions;

export default toolSlice.reducer;
