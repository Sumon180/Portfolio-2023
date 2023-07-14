import { combineReducers } from "redux";
import counterSlice from "../reducer/counterSlice";
import buttonSlice from "./buttonSlice";

const rootReducer = combineReducers({
  button: buttonSlice.reducer,
  counter: counterSlice.reducer,
});

export default rootReducer;