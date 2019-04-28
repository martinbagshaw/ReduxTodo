// action creators
import { ADD, CHECKED, SET_MENU } from "./actionTypes";

// increment the id of each todo by 1
let nextTodoId = 0;

export const addTodo = message => ({
  type: ADD,
  payload: {
    id: ++nextTodoId,
    message
  }
});

export const checkTodo = id => ({
  type: CHECKED,
  payload: { id }
});

export const setMenu = filter => ({ type: SET_MENU, payload: { filter } });
