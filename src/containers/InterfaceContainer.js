// redux state wrapper for messages
import { connect } from "react-redux"; // connect to the store

// parent class component to connect to the store
import Interface from "../components/Interface";

// action creators
import { addMessage } from "../actions/actionCreators";

// map state and dispatch to props - for messages only
// - may have to map more stuff to props as well
// - may have to make more containers
const mapStateToProps = state => {
  return { messages: state };
};
const mapDispatchToProps = dispatch => {
  return {
    submitNewMessage: function(message) {
      dispatch(addMessage(message));
    }
  };
};

// link to the store (connect redux to react)
const InterfaceContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Interface);

export default InterfaceContainer;
