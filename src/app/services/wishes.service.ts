import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {

  lists: List[] = [];
  
  constructor() {
    console.log('Servicio Inicializado');
    const LISTA_UNO = new List('Guitarras Favoritas');
    const LISTA_DOS = new List('Canciones de Metallica Favoritas');

    this.lists.push(LISTA_UNO, LISTA_DOS);
  }
}
