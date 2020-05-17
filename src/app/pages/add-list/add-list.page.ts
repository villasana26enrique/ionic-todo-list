import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { List } from '../../models/list.model';
import { ListItem } from '../../models/item-list.model';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.page.html',
  styleUrls: ['./add-list.page.scss'],
})
export class AddListPage {

  list: List;
  itemName: string;

  constructor(private wishesService: WishesService,
              private route: ActivatedRoute) {
    this.route.params.subscribe( (params: any) => {
      this.list = this.wishesService.getList( params.listaId );
    });
  }

  additem() {
    if( this.itemName.length === 0 ) {
      return;
    } else {
      const newItem = new ListItem( this.itemName );
      this.list.items.push( newItem );
      console.log(newItem);
      this.itemName = '';
      this.wishesService.saveStorage();
    }
  }

  changeCheck(item: ListItem): void {
    /* Este codigo se hace para saber cuantos elementos de la lista estan
    pendiente*/
    const pendingTask = this.list.items
                        .filter(itemData => !itemData.finished )
                        .length;
    if( pendingTask === 0 ) {
      this.list.finishedAt = new Date();
      this.list.finished = true;
    } else {
      this.list.finishedAt = null;
      this.list.finished = false;
    }

    this.wishesService.saveStorage();
  }

  deleteItem( index: number ) {
    this.list.items.splice( index, 1 );
    this.wishesService.saveStorage();
  }

}