import React from "react";

import TodoItem from "./TodoItem";

// convert state to something we can use
// - selector functions probably designed to reduce amount of mapping
// - could not get them to work as expected
// - I map twice here (todoDetails, then in the output), not ideal

// import { getTodosState, getTodoList, getTodos, getTodoById } from "../selectors/selectors";
const todoDetails = todos => todos.allIds.map(index => ({ ...todos.byIds[index], id: index }));

export const TodoList = ({ messages, onClick }) => {
  const todos = todoDetails(messages);

  return (
    todos.length > 0 && (
      <ul className="todo-list">
        {todos.map(item => {
          return <TodoItem key={item.id} item={item} onClick={onClick} />;
        })}
      </ul>
    )
  );
};
