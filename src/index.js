import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import NavBar from "./components/NavBar";
import { PersistGate } from "redux-persist/integration/react";

import { Provider } from "react-redux";
import { store, PersistedStore } from "./redux/store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";
import "./css/scroll.css";
import "./css/categoryList.css";
import "./css/randomProduct.css";
import "./css/cardList.scss";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={PersistedStore}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
