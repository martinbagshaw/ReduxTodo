// redux container
// - connects components in Interface.js to the store
import { connect } from "react-redux"; // connect to the store

// parent class component to connect to the store
import Interface from "../components/Interface";

// action creators
import { addTodo, checkTodo, setMenu } from "../actions/actionCreators";

// map state to props - for messages only
// - key = reducer function name
const mapStateToProps = state => {
  return {
    messages: state.todoReducer,
    activeItem: state.menuReducer
  };
};

// map different actions we are dispatching to props
const mapDispatchToProps = dispatch => {
  return {
    // todos
    submitTodo: function(message) {
      dispatch(addTodo(message));
    },
    toggleTodo: function(message) {
      dispatch(checkTodo(message));
    },
    // menu
    menuState: function(menuItem) {
      dispatch(setMenu(menuItem));
    }
  };
};

// link to the store (connect redux to react)
const InterfaceContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Interface);

export default InterfaceContainer;
