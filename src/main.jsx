import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "normalize.css";
import "./index.css";
import { store } from "./store/index.js";
import { Provider } from "react-redux";
store;
Provider;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App tab="home" />
    </Provider>
  </React.StrictMode>
);
