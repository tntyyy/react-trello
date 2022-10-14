import React from "react";
import {useRoutes} from "react-router-dom";
import MainPage from "@/pages/MainPage/MainPage";
import EditPopup from "@/components/EditPopup/EditPopup";

const AppRoutes = () => useRoutes([
    {
        path: "/",
        element: <MainPage/>,
        children: [
            {
                path: "/edit/:boardId/:id",
                element: <EditPopup />
            }
        ]
    }
]);

export default AppRoutes;