import {ITask} from "@/types/task";

export interface IBoard {
    id: string;
    name: string;
    tasks: ITask[];
}