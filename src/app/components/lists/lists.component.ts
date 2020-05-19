import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { WishesService } from '../../services/wishes.service';
import { List } from '../../models/list.model';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent {

  @Input() finished = true;

  public lists: List;
  private router: any;
  private wishesService: any;

  constructor(_router: Router,
              _wishesServices: WishesService) {
    this.router = _router;
    this.wishesService = _wishesServices;
    this.lists = this.wishesService.lists;
  }

  watchList( id: string ) {
    /* Ambas funcionan */
    // this.router.navigate( [ '/tabs/tab1/add', id ] );
    if( this.finished ){
      this.router.navigateByUrl(`/tabs/tab2/add/${ id }`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/add/${ id }`);
    }
  }

}
