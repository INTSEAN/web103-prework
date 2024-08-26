import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShowCreators from "./components/pages/ShowCreators";
import ViewCreator from "./components/pages/ViewCreator";
import EditCreator from "./components/pages/EditCreator";
import AddCreator from "./components/pages/AddCreator";
import ErrorPage from "./components/pages/ErrorPage";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ShowCreators />,
    errorElement: <ErrorPage />,
    children: [],
  },
  {
    path: "/view/:profileId",
    element: <ViewCreator />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/edit/:id",
    element: <EditCreator />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/add",
    element: <AddCreator />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
