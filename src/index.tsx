import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { App } from "./App.jsx";
import { GlobalStyles } from "./styles/Global.js";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    <App />
  </React.StrictMode>
);
