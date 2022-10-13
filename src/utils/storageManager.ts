import Storage from "@/types/storage";
import {ITask} from "@/types/task";
import {IBoard} from "@/types/board";

enum Locals {
    TASKS = "tasks",
    BOARDS = "boards"
}

class storageManager extends Storage<Locals> {
    private static instance?: storageManager;

    private constructor() {
        super();
    }

    public static getInstance() {
        if (!this.instance) {
            this.instance = new storageManager();
        }

        return this.instance;
    }

    public getTasks() {
        return this.get(Locals.TASKS);
    }

    public getBoards() {
        return this.get(Locals.BOARDS);
    }

    public setTask(task: ITask) {
        this.set(Locals.TASKS, JSON.stringify(task));
    }

    public setBoard(board: IBoard) {
        this.set(Locals.BOARDS, JSON.stringify(board));
    }

    public clear() {
        this.clearItems([Locals.BOARDS, Locals.TASKS]);
    }
}

export default storageManager;