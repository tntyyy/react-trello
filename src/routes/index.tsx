import React from "react";
import {useRoutes} from "react-router-dom";
import MainPage from "@/pages/MainPage/MainPage";
import Popup from "@/components/Popup/Popup";

const AppRoutes = () => useRoutes([
    {
        path: "/",
        element: <MainPage/>,
        children: [
            {
                path: "/edit/:boardId/:id",
                element: <Popup />
            }
        ]
    }
]);

export default AppRoutes;