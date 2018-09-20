import React from "react";
import Header from "../Header";
import Vista from "../Vista";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Vista />
      </React.Fragment>
    );
  }
}

export default App;
