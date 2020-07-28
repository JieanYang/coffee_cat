// src/index.js

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";


import configureStore from "./store";
import App from "./module/App";

const store = configureStore()

render(
  <Provider store={store}>
	<App />
  </Provider>,
  document.getElementById("root")
);


console.log("================================");
console.log("APP_NODE_ENV: ", APP_NODE_ENV);
console.log("================================");