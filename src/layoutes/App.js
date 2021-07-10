import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../styles/App.css";

class app extends Component {
  state = {};
  render() {
    return (
      <Router>
        <h1>hello world</h1>
      </Router>
    );
  }
}

export default app;
