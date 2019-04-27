import React from "react";
import "./App.css";

// redux things
import { Provider } from "react-redux"; // provider wraps the connect component
import store from "./store/store"; // store stores our state

// redux container
import MessageContainer from "./MessageContainer";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Redux Todo List</h1>
        </header>
        <Provider store={store}>
          <MessageContainer />
        </Provider>
      </div>
    );
  }
}
