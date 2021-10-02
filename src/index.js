import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import NavBar from "./components/NavBar";
import { PersistGate } from "redux-persist/integration/react";

import { Provider } from "react-redux";
import { store, PersistedStore } from "./redux/store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.scss";
import "./css/scroll.scss";
import "./css/categoryList.scss";
import "./css/randomProduct.scss";
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
