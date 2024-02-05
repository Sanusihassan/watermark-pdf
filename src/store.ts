import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  path: string;
  click: boolean;
  focus: boolean;
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
  path: "",
  click: false,
  focus: false,
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
    showTool(state: ToolState) {
      state.showTool = true;
    },
    setClick(state: ToolState, action: PayloadAction<boolean>) {
      state.click = action.payload;
    },
    setFocus(state: ToolState, action: PayloadAction<boolean>) {
      state.focus = action.payload;
    },
    setShowDownloadBtn(state: ToolState, action: PayloadAction<boolean>) {
      state.showDownloadBtn = action.payload;
    },
    setPath(state: ToolState, action: PayloadAction<string>) {
      state.path = action.payload;
    },
    hideTool(state: ToolState) {
      state.showTool = false;
    },
    setErrorMessage(state: ToolState, action: PayloadAction<string>) {
      state.errorMessage = action.payload;
      state.showErrorMessage = true; // set the showErrorMessage property to true when an error message is set
    },
    resetErrorMessage(state: ToolState) {
      state.errorMessage = "";
      state.showErrorMessage = false; // reset the showErrorMessage property to false when the error message is reset
      state.errorCode = null;
      state.isSubmitted = false;
    },
    setErrorCode(state: ToolState, action: PayloadAction<string | null>) {
      state.errorCode = action.payload;
    },
    setIsSubmitted(state: ToolState, action: PayloadAction<boolean>) {
      state.isSubmitted = action.payload;
    },
    setShowOptions(state: ToolState, action: PayloadAction<boolean>) {
      state.showOptions = action.payload;
    },
    setNavHeight(state: ToolState, action: PayloadAction<number>) {
      state.nav_height = action.payload;
    },
    setPageCount(state: ToolState, action: PayloadAction<number>) {
      state.pageCount = action.payload;
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
  showTool,
  hideTool,
  setErrorMessage,
  resetErrorMessage,
  setErrorCode,
  setIsSubmitted,
  setPath,
  setClick,
  setFocus,
  setShowDownloadBtn,
  setShowOptions,
  setNavHeight,
  setOptions,
  setPageCount,
} = toolSlice.actions;

export default toolSlice.reducer;
