import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss"

const root = createRoot(document.getElementById('root')!);

const Root = (
    <h1>Work!</h1>
)

root.render(Root);