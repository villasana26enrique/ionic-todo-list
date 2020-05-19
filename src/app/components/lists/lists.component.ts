import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { WishesService } from '../../services/wishes.service';
import { List } from '../../models/list.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent {

  @Input() finished = true;

  private router: any;
  public wishesService: any;
  private alertController: any;

  constructor(_router: Router,
              _wishesServices: WishesService,
              _alertController: AlertController) {
    this.router          = _router;
    this.wishesService   = _wishesServices;
    this.alertController = _alertController;
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

  deleteList(list: List) {
    this.wishesService.deleteList( list );
    this.showMessage();
  }

  async showMessage() {
      const alert = await this.alertController.create({
      header: 'Importante',
      message: 'La Lista ha sido eliminada con exito',
      buttons: ['OK']
    });

    await alert.present();
  }

}
