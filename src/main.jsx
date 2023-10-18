import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ThemeProvider from "./provider/ThemeProvider.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Route.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  </React.StrictMode>
);
