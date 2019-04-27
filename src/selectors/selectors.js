// selectors
// - not used yet
// - used to manipulate data into forms we can output in components
import { SET_MENU } from "../actions/actionTypes";

export const getTodosState = store => store.todos;

export const getTodoList = store => (getTodosState(store) ? getTodosState(store).allIds : []);

export const getTodoById = (store, id) => (getTodosState(store) ? { ...getTodosState(store).byIds[id], id } : {});

/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
 */
export const getTodos = store => getTodoList(store).map(id => getTodoById(store, id));

// for menu to work
export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
  const allTodos = getTodos(store);
  switch (visibilityFilter) {
    case SET_MENU.COMPLETED:
      return allTodos.filter(todo => todo.completed);
    case SET_MENU.INCOMPLETE:
      return allTodos.filter(todo => !todo.completed);
    case SET_MENU.ALL:
    default:
      return allTodos;
  }
};
