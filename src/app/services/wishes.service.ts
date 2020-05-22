import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {

  lists: List[] = [];

  constructor() {
    console.log('Servicio Inicializado');
    this.loadStorage();
  }

  createList( title: string ) {
    const newList = new List( title );
    this.lists.push(newList);
    this.saveStorage();
    return newList.id;
  }

  deleteList( list: List ) {
    this.lists = this.lists.filter( listData => listData.id !== list.id);
    this.saveStorage();
  }

  editList ( id: string | number, title: string ) {
    id = Number(id);
    let list = this.lists.find( listData => listData.id === id );
    list.title = title;
    this.saveStorage();
  }

  getList(id: string | number) {
    id = Number(id);
    return this.lists.find( listData => listData.id === id );
  }

  saveStorage() {
    localStorage.setItem('data', JSON.stringify(this.lists));
  }

  loadStorage() {
    if ( localStorage.getItem('data') ) {
      this.lists = JSON.parse(localStorage.getItem('data'));
    }
  }
}
