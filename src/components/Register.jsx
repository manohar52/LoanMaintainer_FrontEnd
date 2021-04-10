import React, { Component } from "react";
import { Button, InputGroup, FormControl, Container } from "react-bootstrap";
import LoginService from "../service/LoginService.js";
import NavbarComp from "./NavbarComp";
import "../css/Login.css";

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
    this.fname = React.createRef();
    this.lname = React.createRef();
  }

  componentDidMount() {
    const uname = sessionStorage.getItem("userName");
    if (uname) {
      this.setState({ loggedIn: true });
    }
  }

  registerHandler() {
    LoginService.registerUser(
      this.userNameRef.current.value,
      this.passwordRef.current.value,
      this.fname.current.value,
      this.lname.current.value
    )
      .then((response) => {
        if (response.data) {
          sessionStorage.setItem("userName", this.userNameRef.current.value);
          this.setState({ loggedIn: true });
        }
      })
      .catch((error) => {
        console.log("Failed to register");
      });
  }

  render() {
    return (
      <div>
        {!this.state.loggedIn ? (
          <Container className="container shadow mb-5 bg-white rounded">
            <div className="row">
              <div className="col-md">
                <InputGroup className="mb-1">
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
              <div className="col-md">
                <InputGroup className="mb-1">
                  <FormControl
                    ref={this.fname}
                    placeholder="First Name"
                    aria-label="First Name"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </div>
            </div>
            <div className="row">
              <div className="col-md">
                <InputGroup className="mb-1">
                  <FormControl
                    ref={this.lname}
                    placeholder="Last Name"
                    aria-label="Last Name"
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
                  onClick={this.registerHandler.bind(this)}
                >
                  Register
                </Button>
              </div>
            </div>
          </Container>
        ) : (
          <div>
            <NavbarComp/>
          </div>
        )}
      </div>
    );
  }
}

export default Login;
