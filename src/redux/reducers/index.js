// src/redux/reducers/index.js

import { combineReducers } from "redux";
import cardReducer from "./сardReducer";

const rootReducer = combineReducers({
  cards: cardReducer,
});

export default rootReducer;
