// redux container
// - connects components in Interface.js to the store
import { connect } from "react-redux"; // connect to the store

// parent class component to connect to the store
import Interface from "../components/Interface";

// action creators
import { addTodo, checkTodo } from "../actions/actionCreators";

// map state and dispatch to props - for messages only
// - may have to map more stuff to props as well
// - may have to make more containers
const mapStateToProps = state => {
  return { messages: state };
};

// map different actions we are dispatching to props
const mapDispatchToProps = dispatch => {
  return {
    submitTodo: function(message) {
      dispatch(addTodo(message));
    },
    toggleTodo: function(message) {
      dispatch(checkTodo(message));
    }
  };
};

// link to the store (connect redux to react)
const InterfaceContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Interface);

export default InterfaceContainer;
