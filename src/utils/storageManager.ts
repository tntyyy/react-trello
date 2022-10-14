import {IBoard} from "@/types/board";
import storage from "@/types/storage";

enum Locals {
    BOARDS = "boards"
}

class storageManager {
    public getBoards() {
        const data = storage.get(Locals.BOARDS);
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
        storage.set(Locals.BOARDS, JSON.stringify(data));
    }

    public clear() {
        storage.clearAll([Locals.BOARDS]);
    }
}

export default new storageManager();