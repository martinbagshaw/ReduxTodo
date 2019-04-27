import React from "react";

import TodoItem from "./TodoItem";

export const TodoList = ({ messages }) => {
  //   const { messages } = props;

  return (
    messages.length > 0 && (
      <ul className="todo-list">
        {messages.map((item, i) => {
          return <TodoItem key={i} item={item} />;
        })}
      </ul>
    )
  );
};
