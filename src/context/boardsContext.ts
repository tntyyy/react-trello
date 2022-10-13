import React, {createContext} from "react";
import {IBoard} from "@/types/board";

interface ContextType {
    boards: IBoard[];
    setBoards: React.Dispatch<React.SetStateAction<IBoard[]>>;
}

export const BoardsContext = createContext<ContextType>(undefined!);