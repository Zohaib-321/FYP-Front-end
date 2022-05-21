import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";

export default class login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
    this.state = { password: "" };
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    var formdata = new FormData();
    formdata.append("email", this.state.email);
    formdata.append("password", this.state.password);
    // formdata.append("address", "johartown");
    // formdata.append("number", "23232");
    // formdata.append("distributor_id", "1");

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://localhost:3001/authenticate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // if (result.auth_token){
        //   alert('success');
        // }

        if (result.auth_token) {
          console.log(result);
          window.localStorage.setItem("token", result.auth_token);
          window.localStorage.setItem("userId", result.user_id);
          this.props.history.push({
            pathname: "/index",
            state: { detail: result.auth_token },
          });
        } else {
          alert("Invalid Credential");
        }
      })
      .catch((error) => alert("Invalid Credential", error));

    alert("Welcome " + this.state.email);
  };

  myChangeHandler = (event) => {
    this.setState({ email: event.target.value });
  };
  mypasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <div className="Login">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-10 col-lg-12 col-md-9">
              <div class="card o-hidden border-0 shadow-lg my-5">
                <div class="card-body p-0">
                  <div class="row">
                    <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                    <div class="col-lg-6">
                      <div class="p-5">
                        <div class="text-center">
                          <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                        </div>
                        <form class="user" onSubmit={this.mySubmitHandler}>
                          <div class="form-group">
                            <input
                              type="email"
                              class="form-control form-control-user"
                              id="exampleInputEmail"
                              aria-describedby="emailHelp"
                              placeholder="Enter Email Address..."
                              onChange={this.myChangeHandler}
                            />
                          </div>
                          <div class="form-group">
                            <input
                              type="password"
                              class="form-control form-control-user"
                              id="exampleInputPassword"
                              placeholder="Password"
                              onChange={this.mypasswordHandler}
                            />
                          </div>
                          <div class="form-group">
                            <div class="custom-control custom-checkbox small">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="customCheck"
                              />
                              <label
                                class="custom-control-label"
                                for="customCheck"
                              >
                                Remember Me
                              </label>
                            </div>
                          </div>
                          <button
                            type="submit"
                            className="btn btn-dark btn-lg btn-block"
                            onClick={this.check}
                          >
                            Login
                          </button>
                          <hr />
                          <a href="/" class="btn btn-google btn-user btn-block">
                            <i class="fab fa-google fa-fw"></i> Login with
                            Google
                          </a>
                          <a
                            href="/"
                            class="btn btn-facebook btn-user btn-block"
                          >
                            <i class="fab fa-facebook-f fa-fw"></i> Login with
                            Facebook
                          </a>
                        </form>
                        <hr />
                        <div class="text-center">
                          <a class="small" href="Forget">
                            Forgot Password?
                          </a>
                        </div>
                        <div class="text-center">
                          <a class="small" href="/Registeration">
                            Create an Account!
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
