import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { AlertController } from '@ionic/angular';
import { ListItem } from '../../models/item-list.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private alertCntlr: any;

  constructor(private wishesService: WishesService,
              private router: Router,
              _alertCntlr: AlertController) {
    this.alertCntlr = _alertCntlr;
  }

  async addList() {
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
          handler: (data: any) => {
            if (data.titulo.length === 0) {
              return;
            } else {
              const listId = this.wishesService.createList(data.titulo);
              this.router.navigateByUrl(`/tabs/tab1/add/${ listId }`);
            }
          }
        }
      ]
    });

    alert.present();
  }

}
