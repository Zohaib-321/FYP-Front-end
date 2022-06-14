import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Index from "./components/index/index.js";
import Login from "./components/login.js";
import Registration from "./components/Registeration.js";
import Forget from "./components/Forget.js";
import Order from "./components/order.js";
import ProtectedRoute from "./components/protectedroute.js";
import Medstore from "./components/medstore/medindex";
import Manufacture from "./components/manufacture/manufindex"
import NewProduct from "./components/newProduct/NewProduct.js";
import Product from "./components/product/Product.js";
import ProductList from "./components/productList/ProductList.js";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/Registeration" component={Registration} /><Route path="/Registeration" component={Registration} /><Route path="/Registeration" component={Registration} />
        <ProtectedRoute path="/index" component={Index} />
        <ProtectedRoute path="/Forget" component={Forget} />
        <ProtectedRoute path="/order" component={Order} />
        <Route path="/medstore" component={Medstore} />
        <Route path="/manufacture" component={Manufacture} />
        <Route path="/newproduct" component={NewProduct} />
        <Route path="/products" component={Product} />
        <Route path="/productlist" component={ProductList} />

      </Switch>
    </Router>
  );
}

export default App;
