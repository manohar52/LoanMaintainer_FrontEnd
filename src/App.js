import React, { Component } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/home">
              <NavbarComp />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
