import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ColorState {
  color: string;
}

const initialState: ColorState = {
  color:
    typeof window !== "undefined"
      ? localStorage.getItem("color") || "#417505"
      : "#417505",
};

const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    setColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
      localStorage.setItem("color", action.payload);
    },
  },
});

export const { setColor } = colorSlice.actions;
export default colorSlice;
