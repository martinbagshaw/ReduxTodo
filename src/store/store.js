import { createStore } from "redux";

// import root reducer (combines menu and todo reducers)
import rootReducer from "../reducers";
export default createStore(rootReducer);
