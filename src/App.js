// App component in root to separate from regular app components
import React from "react";
import "./css/App.css";

// redux things
import { Provider } from "react-redux"; // provider wraps the connect component
import store from "./store/store"; // store stores our state

// redux container
import InterfaceContainer from "./containers/InterfaceContainer";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Redux Todo List</h1>
        </header>
        <Provider store={store}>
          <InterfaceContainer />
        </Provider>
      </div>
    );
  }
}
