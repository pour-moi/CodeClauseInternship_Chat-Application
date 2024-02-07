import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChatPlace } from "./componenets/chatArea.jsx";
import { UserName } from "./componenets/userName.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserName />,
  },
  {
    path: "/App",
    element: <App />,
  },
  {
    path: "chatArea/:category",
    element: <ChatPlace />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
