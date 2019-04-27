// - manages todo list items
// - connected to the redux store through MessageContainer
import React from "react";

import { TodoAdd } from "./TodoAdd";
import { TodoMenu } from "./TodoMenu";
import { TodoList } from "./TodoList";

// messages come from props - parent component connects with the redux store
// - attempt to have one connection with the store, and props passed down to all children
export default class Interface extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  submitMessage() {
    this.props.submitNewMessage(this.state.input);
    this.setState({
      input: ""
    });
  }

  render() {
    // props from redux:
    const { messages } = this.props;

    // state locally:
    const { input } = this.state;

    return (
      <div className="Messages">
        <h2>Type in a new Message:</h2>
        <p>Add views for all, done, todo</p>
        <p>also add a way to add tags for each</p>
        <TodoAdd onChange={this.handleChange} onClick={this.submitMessage} input={input} />
        <TodoMenu />
        <TodoList messages={messages} />
      </div>
    );
  }
}
