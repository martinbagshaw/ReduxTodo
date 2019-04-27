import React from "react";

const TodoItem = ({ item, onClick }) => {
  // idea to have tags as an extra feature
  // const tags = item => {
  //   return item.split("").map(i => <span>{i}</span>);
  // };
  //{
  /* {tags(item)} */
  //}

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
