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
        const boardsCopy = this.boards.filter((board: IBoard) => {
            if (board.id === boardId) {
                board.tasks.filter((task: ITask) => {
                    if (task.id === id) {
                        return false;
                    }
                    return task;
                })
            }
            return board;
        })

        storage.clear();

        boardsCopy.forEach((board: IBoard) => {
            storage.setBoard(board);
        });

        return boardsCopy;
    }
}

export default TaskService;