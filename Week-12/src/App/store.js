import { createStore, combineReducers } from "redux";
import { modeReducer } from "./modeSlice";

const rootReducer = combineReducers({
  modeReducer,
});

export const store = createStore(rootReducer);
