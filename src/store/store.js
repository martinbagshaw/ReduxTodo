import { createStore } from "redux";

// will want to combine todo reducer with menu reducer
import todoReducer from "../reducers/todoReducer";

const store = createStore(todoReducer);

export default store;
