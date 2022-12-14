import {IBoard} from "@/types/board";
import {ITask} from "@/types/task";
import storage from "@/utils/storageManager";


class TaskService {
    private boards: IBoard[];

    constructor(boards: IBoard[]) {
        this.boards = boards;
    }

    public deleteTask(id: string, boardId: string) {
        const boardsCopy = this.boards.map((board: IBoard) => {
            if (board.id === boardId) {
                return {
                    ...board,
                    tasks: board.tasks.filter((task: ITask) => task.id !== id)
                }
            } else {
                return board;
            }
        })

        storage.clear();

        boardsCopy.forEach((board: IBoard) => {
            storage.setBoard(board);
        });

        return boardsCopy;
    }

    public getOneTask(id: string, boardId: string) {
        const board = this.boards.find((board: IBoard) => {
            if (board.id === boardId) {
                return board;
            }
        });

        if (board) {
            return board.tasks.find((task: ITask) => {
                if (task.id === id) {
                    return task;
                }
            });
        }
    }

    public editTask(id: string, boardId: string, name: string, description: string) {
        const boardsCopy = this.boards.map((board: IBoard) => {
            if (board.id === boardId) {
                return {
                    ...board,
                    tasks: board.tasks.map((task: ITask) => {
                        if (task.id === id) {
                            return {
                                ...task,
                                name: name,
                                description: description
                            }
                        }
                        return task;
                    })
                }
            }
            return board;
        })

        storage.clear();
        boardsCopy.forEach((board) => {
            storage.setBoard(board);
        });

        return boardsCopy;
    }
}

export default TaskService;