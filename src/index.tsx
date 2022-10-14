import React, {useEffect, useState} from "react";
import { createRoot } from "react-dom/client";
import "./index.scss"
import AppRoutes from "@/routes";
import {BrowserRouter} from "react-router-dom";
import {BoardsContext} from "@/context/boardsContext";
import {IBoard} from "@/types/board";
import storageManager from "@/utils/storageManager";

const root = createRoot(document.getElementById('root')!);

const storage = storageManager.getInstance();

const App = () => {
    const [boards, setBoards] = useState<IBoard[]>(storage.getBoards());

    useEffect(() => {
        const updateStorage = () => {
            setBoards(storage.getBoards());
        }

        window.addEventListener("storage", updateStorage);

        return () => {
            window.removeEventListener("storage", updateStorage);
        }
    }, []);


    return (
        <BoardsContext.Provider value={{boards, setBoards}}>
            <AppRoutes />
        </BoardsContext.Provider>
    );
}

const Root = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

root.render(Root);