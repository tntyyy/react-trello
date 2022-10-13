import storageManager from "@/utils/storageManager";
import {IBoard} from "@/types/board";
import React from "react";

class BoardService {
    private boards: IBoard[];

    constructor(boards: IBoard[]) {
        this.boards = boards;
    }

    public deleteBoard(id: string) {
        const storage = storageManager.getInstance();

        const boardsCopy = this.boards.filter(item => item.id !== id);

        storage.clear();

        boardsCopy.forEach((board: IBoard) => {
            storage.setBoard(board);
        });

        return boardsCopy;
    }

    public saveEditingName(event: React.FocusEvent<HTMLHeadingElement, Element>) {

    }
}

export default BoardService;