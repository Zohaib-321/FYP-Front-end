import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

export default class Registeration extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
    this.state = { email: "" };
    this.state = { password: "" };
    this.state = { detail_type: "" };
    this.state = { name: "" };
    this.state = { license: "" };
    this.state = { number: "" };
    this.state = { address: "" };

    this.state = {
      value: "distributor",      
      value: 'medstore',
      value: 'manufacture',
      hidden: true
    };

    //  this.handleChange = this.handleChange.bind(this);
  }
 
  // handleChange(event) {
  //   this.setState({value: event.target.value});
    
  //   if(this.state.value === "Medstore" && this.state.value  === "Manufactor")
  //   {
  //     this.setState({
  //       hidden: !this.state.hidden
  //     })
  //   }
  //   this.setState({ detail_type: event.target.value });
    
    // this.setState({ value: event.target.value });
    // // console.log(ko);
    // // if(this.setState.value === "Medstore" && this.setState.value === "Manufactor")
    
    
    // this.setState({
      
      
    //   hidden: !this.state.hidden
      
    // }); 
    // 
  // }
 
  handleChange = (event) =>
  {
    event.preventDefault();
   this.setState({value: event.target.value});
   if(event.target.value == "medstore"){
    
    this.setState({ hidden: true });
   }
   if(event.target.value == "distributor")
   {
    this.setState({ hidden: !true });
   }
   if(event.target.value == "manufacture")
   {
    this.setState({ hidden: true });
   }
    this.setState({ detail_type: event.target.value });
    
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    var formdata = new FormData();
    alert(this.state.email);
    formdata.append("email", this.state.email);
    formdata.append("username", this.state.username);
    formdata.append("password", this.state.password);
    formdata.append("detail_type", this.state.detail_type);
    formdata.append("name", this.state.name);
    formdata.append("license", this.state.license);
    formdata.append("number", this.state.number);
    formdata.append("address", this.state.address);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://localhost:3001/users", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        if (result) {
          alert(result.auth_token);
          alert("Signed UP SucsexFully");

          this.props.history.push({
            pathname: "/index",
            state: { detail: result.text },
          });
        } else {
          alert("hjhj");
        }
      })
      .catch((error) => console.log("error", error));
  };
  myusernameHandler = (event) => {
    this.setState({ username: event.target.value });
  };
  myemailHandler = (event) => {
    this.setState({ email: event.target.value });
  };
  mypasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };
  mydetail_typeHandler = (event) => {
    this.setState({ detail_type: event.target.value });
  };
  mynameHandler = (event) => {
    this.setState({ name: event.target.value });
  };
  mylicenseHandler = (event) => {
    this.setState({ license: event.target.value });
  };
  mynumberHandler = (event) => {
    this.setState({ number: event.target.value });
  };
  myaddressHandler = (event) => {
    this.setState({ address: event.target.value });
  };

  render() {
    return (
      <Router>
        <div class="container">
          <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
              <div class="row">
                <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
                <div class="col-lg-7">
                  <div class="p-5">
                    <div class="text-center">
                      <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                    </div>
                    <form class="user" onSubmit={this.mySubmitHandler}>
                      <div class="form-group">
                          <input
                            type="text"
                            class="form-control form-control-user"
                            id="exampleFirstName"
                            placeholder="Username"
                            onChange={this.myusernameHandler}
                          />
                      </div>
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control form-control-user"
                          id="exampleInputEmail"
                          placeholder="email"
                          onChange={this.myemailHandler}
                        />
                      </div>
                      {/* <div class = "d-flex flex-column"> */}
                      <div class="form-group row mb-4">
                        <div class="col-sm-6 mb-3 mb-sm-0">
                          <input
                            type="password"
                            class="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Password"
                            onChange={this.mypasswordHandler}
                          />
                        </div>
                        <div class="ml-4">
                        <div class="col-sm-6 mb-3  mt-3 mb-sm-0">
                        
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="distributor">Distributor</option>
                            <option value="manufacture">Manufacture</option>
                            <option value="medstore">Medical store</option>
                          </select>
                        </div>
                        </div>
                        </div>
                        <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control"  required = "require" placeholder="Enter name" onChange={this.mynameHandler} />
                    </div>
                    <div className="form-group">
                    <label>License</label>
                    <input type="text" className="form-control"  required = "require" placeholder="Enter License" onChange={this.mylicenseHandler} />
                    </div>
                    <div className="form-group">
                    <label>Number</label>
                    <input type="integer" className="form-control"  required = "require" placeholder="Enter Number" onChange={this.mynumberHandler}/>
                    </div>
                
    
                <div className="form-group" hidden = { !this.state.hidden }>
                    <label>Address</label>
                    <input type="text" className="form-control"  required = "require" placeholder="Address"onChange={this.myaddressHandler} />
                </div>
                      {/* </div> */}
                      <button
                      type = "submit"
                        class="btn btn-primary btn-user btn-block"
                        onClick={this.check}
                      >
                        Register Account
                      </button>
                        </form>
                    
                      
                      {/* <a
                        href="index.html"
                        class="btn btn-google btn-user btn-block"
                      >
                        <i class="fab fa-google fa-fw"></i> Register with Google
                      </a>
                      <a
                        href="index.html"
                        class="btn btn-facebook btn-user btn-block"
                      >
                        <i class="fab fa-facebook-f fa-fw"></i> Register with
                        Facebook
                      </a> */}
                    
                    
                    {/* <div class="text-center">
                      <a class="small" href="forgot-password.html">
                        Forgot Password?
                      </a>
                    </div>
                    <div class="text-center">
                      <a class="small" href="/">
                        Already have an account? Login!
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
  