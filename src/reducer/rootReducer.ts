import { combineReducers } from "redux";
import counterSlice from "../reducer/counterSlice";
import buttonSlice from "./buttonSlice";
import colorSlice from "./colorSlice";

const rootReducer = combineReducers({
  button: buttonSlice.reducer,
  counter: counterSlice.reducer,
  color: colorSlice.reducer,
});

export default rootReducer;