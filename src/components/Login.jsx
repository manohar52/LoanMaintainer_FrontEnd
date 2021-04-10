import React, { Component } from "react";
import { Button, InputGroup, FormControl, Container } from "react-bootstrap";
import LoginService from "../service/LoginService.js";
import "../css/Login.css";
import { Redirect, withRouter } from "react-router";
import { Link } from "react-router-dom";
// import NavbarComp from "./NavbarComp";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      loggedIn: false,
    };
    this.userNameRef = React.createRef();
    this.passwordRef = React.createRef();
  }

  componentDidMount() {
    const uname = sessionStorage.getItem("userName");
    if (uname) {
      this.setState({ loggedIn: true });
      this.props.history.push("/home");
    }
  }

  loginHandler() {
    LoginService.authenticateUser(
      this.userNameRef.current.value,
      this.passwordRef.current.value
    )
      .then((response) => {
        if (response.data) {
          sessionStorage.setItem("userName", this.userNameRef.current.value);
          this.setState({ loggedIn: true });
        }
      })
      .catch((error) => {
        console.log("Failed authentication");
      });
  }

  render() {
    if(this.state.loggedIn){
      return (<Redirect to="/home"></Redirect>);
    }
    return (
      <div>
        {/* {!this.state.loggedIn ? ( */}
          <Container className="container shadow mb-5 bg-white rounded">
            <div className="row">
              <div className="col-md">
                <InputGroup className="mb-1">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">
                      Username
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    ref={this.userNameRef}
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </div>
            </div>
            <div className="row">
              <div className="col-md">
                <InputGroup className="mb-1">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">
                      Password
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    ref={this.passwordRef}
                    type="password"
                    placeholder="Password"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </div>
            </div>
            <div className="row">
              <div className="col-md loginbutton">
                <Button
                  className="align-self-center"
                  variant="primary"
                  onClick={this.loginHandler.bind(this)}
                >
                  Log In
                </Button>
              </div>
            </div>
            <div className="row">
              <Link className="registerLink" to="/register">
                New User? Register here
              </Link>
            </div>
          </Container>
        {/* ) : (
          <div>
            <NavbarComp />
          </div>
        )} */}
      </div>
    );
  }
}

export default withRouter(Login);
