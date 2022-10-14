import {IBoard} from "@/types/board";
import {ITask} from "@/types/task";
import storageManager from "@/utils/storageManager";

const storage = storageManager.getInstance();

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
        let oneTask = null;
        this.boards.forEach((board: IBoard) => {
            if (board.id === boardId) {
                board.tasks.forEach((task: ITask) => {
                    if (task.id === id) {
                        oneTask = task;
                    }
                })
            }
        });
        if (oneTask) {
            return oneTask;
        }
    }

    public editTask(id: string, boardId: string) {
        const boardsCopy = this.boards.map((board: IBoard) => {
            return board.tasks.map((task: ITask) => {
                if (task.id === id) {
                    return {
                        ...task,
                        name: "new name"
                    }
                }
                return task;
            });
        })


        return boardsCopy;
    }
}

export default TaskService;