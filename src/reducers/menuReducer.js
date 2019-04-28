// action creators
import { SET_MENU } from "../actions/actionTypes";

// menu items
import { MENU_ITEMS } from "../constants/constants";

// get initial state
const initialState = MENU_ITEMS.ALL;

// menu gets set here
const menuFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_MENU: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default menuFilter;
