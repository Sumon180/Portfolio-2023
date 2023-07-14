// buttonSlice.ts
import { RootState } from "@/store/store";
import { createSlice } from "@reduxjs/toolkit";

interface ButtonState {
  clicked: boolean;
}

const initialState: ButtonState = {
  clicked: false,
};

const buttonSlice = createSlice({
  name: "button",
  initialState,
  reducers: {
    buttonClicked: (state) => {
      state.clicked = true;
    },
  },
});

export const { buttonClicked } = buttonSlice.actions;

export const selectButton = (state: RootState) => state.button.clicked;

export default buttonSlice;