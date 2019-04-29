import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Client from "./Client";
import store from "./redux/store";

import "./index.scss";

import "../src/scss/main.scss";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Client />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
