import React from "react";

// messages come from props - from parent component in redux
export default class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
      // messages: []
    };

    // need to bind methods, as using constructor
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  // add handleChange() and submitMessage() methods here
  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  submitMessage() {
    // const newMsg = this.state.input;
    // const newState = this.state.messages.concat(newMsg);
    this.props.submitNewMessage(this.state.input);
    this.setState({
      // messages: newState,
      input: ""
    });
  }

  render() {
    return (
      <div className="Messages">
        <h2>Type in a new Message:</h2>
        {/* render an input, button, and ul here */}
        <input className="text-input" onChange={this.handleChange} value={this.state.input} />
        <button className="button" onClick={this.submitMessage}>
          Add
        </button>
        <ul className="todo-list">
          {this.props.messages.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ul>

        {/* change code above this line */}
      </div>
    );
  }
}
