import Storage from "@/types/storage";
import {ITask} from "@/types/task";
import {IBoard} from "@/types/board";

enum Locals {
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

    public getBoards() {
        const data = this.get(Locals.BOARDS);
        if (data) {
            return JSON.parse(data);
        }
        return [];
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
        this.clearItems([Locals.BOARDS]);
    }
}

export default storageManager;