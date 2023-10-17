import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { HomePage } from "./pages/home/homePage";
import { AboutPage } from "./pages/about/AboutPage";
import { PlanPage } from "./pages/plan/PlanPage";
import { Navigation } from "./components/nav";
import "./scss/main.scss";

const AppLayout = () => (
  <>
    <Navigation />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "aboutus",
        element: <AboutPage />,
      },
      {
        path: "createplan",
        element: <PlanPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
