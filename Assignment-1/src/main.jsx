import React from "react";
import ReactDOM from "react-dom/client"; // Import ReactDOM correctly
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux"; // Import Provider from react-redux
import store from "./store/store.js"; // Import the Redux store

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
