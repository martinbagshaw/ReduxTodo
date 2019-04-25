// action creators
// import ADD from "./actionTypes";
const ADD = "ADD";

const addMessage = message => {
  return {
    type: ADD,
    message
  };
};

export default addMessage;
