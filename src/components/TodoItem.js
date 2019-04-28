import React from "react";

const TodoItem = ({ item, onClick }) => {
  return (
    <li onClick={() => onClick(item.id)} className={item.completed ? "checked" : ""}>
      {item.message}
      {item.completed && (
        <svg width="48" height="48" viewBox="0 0 48 48">
          <path d="M18 32.34L9.66 24l-2.83 2.83L18 38l24-24-2.83-2.83z" />
        </svg>
      )}
    </li>
  );
};

export default TodoItem;
