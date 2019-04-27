// action creators
import { ADD, CHECKED, SET_MENU } from "./actionTypes";
// const ADD = "ADD";

export const addMessage = message => {
  return {
    type: ADD,
    message
  };
};

// export default addMessage;
