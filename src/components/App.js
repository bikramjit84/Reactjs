import React, { Component } from "react";

import "../styles/App.css";

import DisplayBio from "./DisplayBio";
import AddDeveloper from "./AddDeveloper";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";

function App() {
  return (
    <Router>
      <Navbar />

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/bios">
          <DisplayBio />
        </Route>

        <Route path="/create-bio">
          <AddDeveloper />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
