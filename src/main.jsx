import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import Error from "./components/Error/Error";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import Statistics from "./components/Statistics/Statistics";
import Blogs from "./components/Blogs/Blogs";
import JobDetails from "./components/JobDetails/JobDetails";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AuthProvider from "./Provider/AuthProvider";
import PrivateRoute from "./Private/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/applied-jobs",

        element: (
          <PrivateRoute>
            <AppliedJobs></AppliedJobs>
          </PrivateRoute>
        ),
        loader: () => fetch("/data/jobs.json"),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/job/:id",
        loader: () => fetch("/data/jobs.json"),
        element: <JobDetails></JobDetails>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
