import React from "react";
import Home from "./../pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

interface RouteConfig {
    path: string;
    element: JSX.Element;
}

const routes: RouteConfig[] = [{ path: "/", element: <Home /> }];

function RouteContainer(): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={route.element}
                    />
                ))}
            </Routes>
        </BrowserRouter>
    );
}

export default RouteContainer;
