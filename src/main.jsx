import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./component/Home/Home.jsx";
import About from "./component/About/About.jsx";
import Contact from "./component/Contact/Contact.jsx" 
import Layout from "./Layout.jsx";
import User from "./component/User/User.jsx";
import Github from "./component/Github/Github.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "User/:userId",
                element: <User />,
            },
            {
                path: "github",
                element: <Github />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
