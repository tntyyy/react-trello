import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss"
import AppRoutes from "@/routes";
import {BrowserRouter} from "react-router-dom";

const root = createRoot(document.getElementById('root')!);

const Root = (
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
)

root.render(Root);