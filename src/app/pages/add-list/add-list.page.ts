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
      this.itemName = '';
      this.wishesService.saveStorage();
    }
  }

}