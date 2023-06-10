import React from "react";
import  ReactDOM  from "react-dom";
import { createRoot } from 'react-dom/client';
import '/src/index.css';
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Profile from "./Components/Profile";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const App = () => {
    return (
        <>
            <Header />
            <Outlet />
            {/* <Footer /> */}
        </>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
            {
                path: "/profile",
                element: <Profile />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />)