// redux state wrapper for messages
import { connect } from "react-redux"; // connect to the store

import DisplayMessages from "./DisplayMessages";
import addMessage from "./actions/actionCreators";

// map state and dispatch to props
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
const MessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayMessages);

export default MessageContainer;
