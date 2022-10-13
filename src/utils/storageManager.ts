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
        const data = this.get(Locals.TASKS);
        if (data) {
            return JSON.parse(data);
        }
        return data;
    }

    public getBoards() {
        const data = this.get(Locals.BOARDS);
        if (data) {
            return JSON.parse(data);
        }
        return data;
    }

    public setTask(task: ITask) {
        let data = this.getTasks();
        if (!data) {
            data = [];
        }
        data.push(task);
        this.set(Locals.TASKS, JSON.stringify(data));
    }

    public setBoard(board: IBoard) {
        let data = this.getBoards();
        if (!data) {
            data = [];
        }
        data.push(board);
        this.set(Locals.BOARDS, JSON.stringify(data));
    }

    public clear() {
        this.clearItems([Locals.BOARDS, Locals.TASKS]);
    }
}

export default storageManager;