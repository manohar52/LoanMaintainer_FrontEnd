import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import Borrowed from "./Borrowed";
import Lent from "./Lent.jsx";
import "../css/NavbarComp.css";

class NavbarComp extends Component {
  logouthandler() {
    sessionStorage.clear();
    this.props.history.push("/login");
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Loan-Maintenece</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <div className="linkwrap">
                  <NavLink
                    activeClassName="is-active"
                    className="links"
                    to="/borrowed"
                  >
                    Borrowed
                  </NavLink>
                </div>
                <div className="linkwrap">
                  <NavLink
                    activeClassName="is-active"
                    className="links"
                    to="/lent"
                  >
                    Lent
                  </NavLink>
                </div>
                <div className="linkwrap">
                  <a
                    className="links"
                    onClick={this.logouthandler.bind(this)}
                    href="#"
                  >
                    Log Out
                  </a>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div>
            <Switch>
              <Route path="/borrowed">
                <Borrowed />
              </Route>
              <Route path="/lent">
                <Lent />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default withRouter(NavbarComp);
