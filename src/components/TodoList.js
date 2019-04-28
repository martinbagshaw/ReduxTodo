/* TodoList.js
- the most complex component, needs to do the following two things;

1./ convert messages object to an array of objects each list item can use
- combine id, message, and completed

2./ load the correct list of todo items, according to activeItem (from state)
- filter menu items according to active item
*/
import React from "react";
import TodoItem from "./TodoItem";

// ideally want to abstract more logic to selectors, and make it more efficient
// - looping through one, filtering, then looping through again
import { getTodosByActiveItem } from "../selectors/selectors";
// import { getTodosState, getTodoList, getTodos, getTodoById } from "../selectors/selectors";

// combine id, message, and completed
const todoDetails = todos => todos.allIds.map(index => ({ ...todos.byIds[index], id: index }));

export const TodoList = ({ messages, onClick, activeItem }) => {
  // 1./ convert messages from state:
  const todos = todoDetails(messages);

  // 2./ filter out messages according to menu state
  const filtered = getTodosByActiveItem(todos, activeItem);

  return (
    filtered.length > 0 && (
      <ul className="todo-list">
        {filtered.map(item => {
          return <TodoItem key={item.id} item={item} onClick={onClick} />;
        })}
      </ul>
    )
  );
};
