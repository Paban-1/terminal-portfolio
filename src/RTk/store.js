import { configureStore } from "@reduxjs/toolkit";
import terminal from "../RTk/TerminalSlice.js";

export const store = configureStore({
  reducer: {
    terminalData: terminal,
  },
});
