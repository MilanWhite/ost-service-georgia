import type { ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HomePage } from "../pages/general/HomePage.tsx";
import { AboutPage } from "../pages/general/AboutPage.tsx";
import { ContactPage } from "../pages/general/ContactPage.tsx";
import { NotFoundPage } from "../pages/general/NotFoundPage.tsx";

import { URLS } from "./config/navigation.ts";

import "./index.css";
import "./i18.ts";

import Snowfall from "react-snowfall";

function AutoSnowfall() {
    const month = new Date().getMonth();
    const isWinter = month === 11 || month === 0 || month === 1;

    if (!isWinter) return null;

    return (
        <Snowfall
            style={{
                position: "fixed",
                width: "100vw",
                height: "100vh",
                zIndex: 1000,
            }}
            color="white"
            snowflakeCount={50}
        />
    );
}

function withSnowfall(element: ReactNode) {
    return (
        <>
            <AutoSnowfall />
            {element}
        </>
    );
}

const router = createBrowserRouter([
    {
        path: URLS.root,
        element: withSnowfall(<HomePage />),
    },
    {
        path: URLS.about,
        element: withSnowfall(<AboutPage />),
    },
    {
        path: URLS.contact,
        element: withSnowfall(<ContactPage />),
    },
    {
        path: "*",
        element: withSnowfall(<NotFoundPage />),
    },
]);

createRoot(document.getElementById("root")!).render(
    <RouterProvider router={router} />
);
