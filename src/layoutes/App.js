import React, { Component } from "react";
import { BrowserRouter as Router, NavLink, Switch } from "react-router-dom";
import "../styles/App.css";

import Header from "./Header";
import Navigation from "./Navigation";
import Page from "./Page";
import Footer from "./Footer";

class app extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div className="app">
          <header>
            <Header />
          </header>
          <main>
            <aside>
              <Navigation />
            </aside>
            <section className="page">
              <Page />
            </section>
          </main>

          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    );
  }
}

export default app;
