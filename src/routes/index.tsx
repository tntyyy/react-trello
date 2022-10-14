import React from "react";
import {useRoutes} from "react-router-dom";
import MainPage from "@/pages/MainPage/MainPage";
import EditPopup from "@/components/EditPopup/EditPopup";
import InfoPopup from "@/components/InfoPopup/InfoPopup";

const AppRoutes = () => useRoutes([
    {
        path: "/",
        element: <MainPage/>,
        children: [
            {
                path: "/edit/:boardId/:id",
                element: <EditPopup />
            },
            {
                path: "/task/:boardId/:id",
                element: <InfoPopup />
            }
        ]
    }
]);

export default AppRoutes;