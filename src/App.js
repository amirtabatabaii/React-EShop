import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CategoryProducts from "./components/CategoryProducts";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact component={Home} path={"/"} />
        <Route
          exact
          component={CategoryProducts}
          path={`/products/:id`}
          render={(props) => <CategoryProducts {...props} />}
        />
        <Route
          exact
          component={ProductDetail}
          path={`/product/:id`}
          render={(props) => <ProductDetail {...props} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
