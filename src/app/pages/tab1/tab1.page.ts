import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { List } from '../../models/list.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public lists: List[];
  private router: any;

  public wishesService: any;
  constructor(_wishesService: WishesService,
              _router: Router,
              public alertCntlr: AlertController) {
    this.wishesService = _wishesService;
    this.lists = this.wishesService.lists;
    this.router = _router;
  }

  async agregarLista() {
    //this.router.navigateByUrl('/tabs/tab1/add');
    const alert = await this.alertCntlr.create({
      header: 'Nueva Lista',
      inputs: [{
        name: 'titulo',
        type: 'text',
        placeholder: 'Nombre de la lista'
      }],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
          }
        },
        {
          text: 'Crear',
          handler: (data) => {
            if (data.titulo.length === 0) {
              return;
            } else {
              this.wishesService.createList(data.titulo);
            }
          }
        }
      ]
    });

    alert.present();
  }
}
