import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Notfound from "./Components/Notfound/Notfound";
import Contact from "./Components/Contact/Contact";
import Portfolio from "./Components/Portfolio/Portfolio";

export default function App() {
    let routes = createBrowserRouter([
        {
            path: "",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: "portfolio",
                    element: <Portfolio />,
                },
                {
                    path: "contact",
                    element: <Contact />,
                },
                {
                    path: "about",
                    element: <About />,
                },
                {
                    path: "*",
                    element: <Notfound />,
                },
            ],
        },
    ]);

    return (
        <>
            <RouterProvider router={routes} />
        </>
    );
}
