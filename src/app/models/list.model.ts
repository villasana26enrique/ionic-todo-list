import { ListItem } from './item-list.model';
export class List {

    id: number;
    title: string;
    createdAt: Date;
    finishedAt: Date;
    finished: boolean;
    items: ListItem[];

    constructor ( title: string ) {
        this.id = new Date().getTime();
        this.title = title;
        this.createdAt = new Date();
        this.finished = false;
        this.items = [];
    }
}