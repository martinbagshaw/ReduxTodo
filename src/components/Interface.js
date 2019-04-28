// - manages todo list items
// - connected to the redux store through MessageContainer
import React from "react";

import { TodoAdd } from "./TodoAdd";
import { TodoMenu } from "./TodoMenu";
import { TodoList } from "./TodoList";

// messages come from props
// - parent component connects with the redux store
// - one connection with the store, with props passed down to all children
export default class Interface extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      formMsg: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  handleChange(e) {
    this.setState({ input: e.target.value, formMsg: "" });
  }

  submitMessage(e) {
    e.preventDefault();
    if (this.state.input.length > 0) {
      this.props.submitTodo(this.state.input);
      this.setState({
        input: "",
        formMsg: ""
      });
    } else {
      this.setState({
        formMsg: "Please enter an item"
      });
    }
  }

  render() {
    // props from redux:
    // - this includes state and functions
    const { messages, toggleTodo } = this.props; // menu (and messages)
    const { activeItem, menuState } = this.props; // messages
    // console.log(this.props);

    // state locally:
    const { input, formMsg } = this.state;

    return (
      <div className="Messages">
        <h2>Type in a new Message:</h2>
        <TodoAdd onChange={this.handleChange} onClick={this.submitMessage} input={input} formMsg={formMsg} />
        <TodoMenu activeItem={activeItem} onClick={menuState} />
        <TodoList messages={messages} onClick={toggleTodo} activeItem={activeItem} />
      </div>
    );
  }
}
