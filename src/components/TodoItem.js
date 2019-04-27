import React from "react";

const TodoItem = ({ item }) => {
  // const tags = item => {
  //   return item.split("").map(i => <span>{i}</span>);
  // };

  return (
    <li>
      {item}
      {/* {tags(item)} */}
    </li>
  );
};

export default TodoItem;
