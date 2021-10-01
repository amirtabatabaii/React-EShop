import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CategoryProducts from "./components/CategoryProducts";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact component={Home} path={"/"} />
        <Route
          exact
          component={CategoryProducts}
          path={`/products/:id`}
          render={(props) => <CategoryProducts {...props} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
