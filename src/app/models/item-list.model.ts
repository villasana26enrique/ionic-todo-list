
export class ListItem {
    desc: string;
    completado: boolean;
    constructor (desc: string, completado = false) {
        this.desc = desc;
        this.completado = completado;
    }

}