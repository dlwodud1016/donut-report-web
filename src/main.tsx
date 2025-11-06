import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";
import { ThemeProvider } from "./components/theme/theme-provider";

const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error('Root element with id "root" not found');
}

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>
);
