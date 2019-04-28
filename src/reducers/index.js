// combine the two reducers to be used with the store
import { combineReducers } from "redux";
import menuReducer from "./menuReducer";
// todos are default and not named exports
import todoReducer from "./todoReducer";

export default combineReducers({ todoReducer, menuReducer });
