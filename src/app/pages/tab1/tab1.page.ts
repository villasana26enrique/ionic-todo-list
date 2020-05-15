import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { List } from '../../models/list.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public lists: List[];
  private router: any;

  public wishesService: any;
  constructor(_wishesService: WishesService, _router: Router) {
    this.wishesService = _wishesService;
    this.lists = this.wishesService.lists;
    this.router = _router;
  }

  agregarLista() {
    this.router.navigateByUrl('/tabs/tab1/add');
  }

}
