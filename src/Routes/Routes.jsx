import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Dashboard from "../Pages/Dashboard";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Dashboard></Dashboard>
            }
        ]
    }
])