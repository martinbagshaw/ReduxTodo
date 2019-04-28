// selectors
// - used to manipulate data into forms we can output in components
// - abstracts logic away from components
import { MENU_ITEMS } from "../constants/constants";

// export const getTodosState = store => store.todos;
// export const getTodoList = store => (getTodosState(store) ? getTodosState(store).allIds : []);
// export const getTodoById = (store, id) => (getTodosState(store) ? { ...getTodosState(store).byIds[id], id } : {});
// export const getTodos = store => getTodoList(store).map(id => getTodoById(store, id));

// output menu list items according to menu state
// export const getTodosByVisibilityFilter = (store, visibilityFilter)
export const getTodosByActiveItem = (todos, activeItem) => {
  switch (activeItem) {
    case MENU_ITEMS.COMPLETED:
      return todos.filter(todo => todo.completed);
    case MENU_ITEMS.INCOMPLETE:
      return todos.filter(todo => !todo.completed);
    case MENU_ITEMS.ALL:
    default:
      return todos;
  }
};
