import "./index.css";
import "./App.css";

import * as serviceWorker from "./serviceWorker";

import AppComponentStyle from "./AppComponentStyle";
import AppHooksStyle from "./AppHooksStyle";
import AppPostComponent from "./AppPostComponent";
import AppPostHooks from "./AppPostHooks";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <React.StrictMode>
    <br />
    <br />
    <AppPostHooks />
    <br />
    <br />
    <AppPostComponent />
    <br />
    <br />
    <br />
    <AppHooksStyle />
    <br />
    <br />
    <br />
    <AppComponentStyle />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
