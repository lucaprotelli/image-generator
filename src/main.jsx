import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import Contact from "./routes/contact.jsx"
import History from "./routes/history.jsx"
import AboutUs from "./routes/aboutUs.jsx"
import Documentation from "./routes/documentation.jsx"
import SignIn from "./routes/signIn.jsx"
import SignUp from "./routes/signUp.jsx"
import GenerateImage from "./routes/generateimage.jsx"

import ErrorPage from "./error-page.jsx"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "generateImage",
        element: <GenerateImage />,
    },
    {
        path: "history",
        element: <History />,
    },

    {
        path: "contacts",
        element: <Contact />,
    },
    {
        path: "aboutUs",
        element: <AboutUs />,
    },
    {
        path: "documentation",
        element: <Documentation />,
    },
    {
        path: "login",
        element: <SignIn />,
    },
    {
        path: "register",
        element: <SignUp />,
    },
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
