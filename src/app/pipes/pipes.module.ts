import { NgModule } from '@angular/core';
import { FiltroCompletadosPipe } from './filtro-completados.pipe';

@NgModule({
  declarations: [FiltroCompletadosPipe],
  exports: [FiltroCompletadosPipe]
  /* Como en este componente no vamos a trabajar con NgIf, NgFor ni ninguna funcion
  de Angular, se eliminar el imports, ya que no es necesario el CommonModule */
})
export class PipesModule { }
