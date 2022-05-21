import React from "react";
import { Redirect } from "react-router-dom";

export default class protectedRoute extends React.Component {
  render() {
    const Component = this.props.component;
    const isAuthenticated = window.localStorage.getItem("token");

    return isAuthenticated ? (
      <Component />
    ) : (
      <Redirect to={{ pathname: "/login" }} />
    );
  }
}
