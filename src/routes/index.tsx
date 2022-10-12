import React from "react";
import {useRoutes} from "react-router-dom";
import MainPage from "@/pages/MainPage/MainPage";

const AppRoutes = () => useRoutes([
    {path: "/", element: <MainPage/>}
]);

export default AppRoutes;