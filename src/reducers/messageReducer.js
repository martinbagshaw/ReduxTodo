// reducers
// import ADD from "../actions/actionTypes";
const ADD = "ADD";

// this should come from a file
const initialState = [];

// message reducer
const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.message];
    default:
      return state;
  }
};

export default messageReducer;
