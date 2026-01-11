import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import App from "./App.jsx";
import { router } from "./routes/routes.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      <ToastContainer />
    </>
  </StrictMode>
);
