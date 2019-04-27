// - manages todo list items
// - connected to the redux store through MessageContainer
import React from "react";

import { TodoAdd } from "./TodoAdd";
// import { TodoMenu } from "./TodoMenu";
import { TodoList } from "./TodoList";

// messages come from props
// - parent component connects with the redux store
// - one connection with the store, with props passed down to all children
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
    this.props.submitTodo(this.state.input);
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
        <TodoAdd onChange={this.handleChange} onClick={this.submitMessage} input={input} />
        {/* <TodoMenu /> */}
        <TodoList messages={messages} onClick={this.props.toggleTodo} />
      </div>
    );
  }
}
