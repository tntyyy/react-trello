import storageManager from "@/utils/storageManager";
import {IBoard} from "@/types/board";
import {v4 as uuidv4} from "uuid";

const storage = storageManager.getInstance();

class BoardService {
    private boards: IBoard[];

    constructor(boards: IBoard[]) {
        this.boards = boards;
    }

    public deleteBoard(id: string) {
        const boardsCopy = this.boards.filter(item => item.id !== id);

        storage.clear();

        boardsCopy.forEach((board: IBoard) => {
            storage.setBoard(board);
        });

        return boardsCopy;
    }

    public saveEditingName(id: string, text: string): IBoard[] {
        const newBoards = this.boards.map((board: IBoard) => {
            if (board.id === id) {
                return {
                    ...board,
                    name: text
                }
            }
            return board;
        });

        storage.clear();
        newBoards.forEach((board) => {
            storage.setBoard(board);
        });

        return newBoards;
    }

    public createTask(id: string) {
        const newBoards = this.boards.map((board: IBoard) => {
            if (board.id === id) {
                return {
                    ...board,
                    tasks: [
                        ...board.tasks,
                        {
                            id: uuidv4(),
                            name: "default task",
                            description: ""
                        }
                    ]
                }
            }
            return board;
        });

        storage.clear();
        newBoards.forEach((board) => {
            storage.setBoard(board);
        });

        return newBoards;
    }
}

export default BoardService;