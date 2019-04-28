// action creators
import { ADD, CHECKED } from "../actions/actionTypes";

// set the initial state for todo items
const initialState = {
  allIds: [],
  byIds: {}
};

// new version
// - an array of ids - for checked todo items
// - an array of objects - for message and completed state
export default function(state = initialState, action) {
  switch (action.type) {
    // add todo case
    case ADD: {
      // destructure id and message
      const { id, message } = action.payload;
      // allIds = index of messages
      // byIds = message and completion state
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            message,
            completed: false
          }
        }
      };
    }

    // checked todo case
    case CHECKED: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      };
    }

    default:
      return state;
  }
}
