
export class ListItem {
    desc: string;
    finished: boolean;
    constructor (desc: string, finished = false) {
        this.desc = desc;
        this.finished = finished;
    }

}