import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Index from "./components/index.js";
import Login from "./components/login.js";
import Registration from "./components/Registeration.js";
import Forget from "./components/Forget.js";
import Order from "./components/order.js";
import ProtectedRoute from "./components/protectedroute.js";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/Registeration" component={Registration} />
        <ProtectedRoute path="/index" component={Index} />
        <ProtectedRoute path="/Forget" component={Forget} />
        <ProtectedRoute path="/order" component={Order} />
      </Switch>
    </Router>
  );
}

export default App;
