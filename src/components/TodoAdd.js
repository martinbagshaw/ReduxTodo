// add todos with a text input and button
// - this uses local state of Interface.js
// - only the entered todo item should be in the store
import React from "react";

export const TodoAdd = ({ onChange, onClick, input }) => {
  return (
    <>
      <input className="text-input" onChange={onChange} value={input} />
      <button className="button" onClick={onClick}>
        Add
      </button>
    </>
  );
};
