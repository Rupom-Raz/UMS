import React from "react";
import { positions, Provider as AlertProvider, transitions } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
const options = {
    timeout: 5000,
    position: positions.BOTTOM_CENTER,
    transition: transitions.SCALE,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <AlertProvider template={AlertTemplate} {...options}>
            <App />
        </AlertProvider>
    </React.StrictMode>
);
