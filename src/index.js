import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { HomePage } from "./pages/home/homePage";
import { AboutPage } from "./pages/about/aboutPage";
import { PlanPage } from "./pages/plan/planPage";
import { Navigation } from "./components/nav";
import { Footer } from "./components/footer";
import "./scss/main.scss";

const AppLayout = () => (
  <>
    <Navigation />
    <Outlet />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/coffeeroasters-site",
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
