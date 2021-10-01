import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import { Provider } from "react-redux";
import store from "./redux/store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";
import "./css/scroll.css";
import "./css/categoryList.css";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <NavBar />
      <App />
      <Footer />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
