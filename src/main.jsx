import "/src/main.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "/src/App.jsx";
import ErrorBoundary from "./components/Diagram/ErrorBoundary";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
