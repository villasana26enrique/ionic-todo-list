import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../models/list.model';

@Pipe({
  name: 'filtroCompletados',
  /* Como se llama desde un Componente externo, se debe agregar el atributo pure e inicializarlo
  como falso, para que de esta manera, el detector de cambios de Angular lo tome en cuenta*/
  pure: false
})
export class FiltroCompletadosPipe implements PipeTransform {

  transform(lists: List[], finished: boolean = true): List[] {
    // Busca todas las listas que esten terminadas o no, según el finished
    return lists.filter( list => list.finished === finished);
  }

}
