import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PartidaComponent} from './partida.component';
import {PresupuestoContainerComponent} from './presupuesto-container/presupuesto-container.component';
const routes: Routes = [{
  path: '',
  component: PartidaComponent,
  children: [{
    path: 'presupuesto',
    component: PresupuestoContainerComponent,
  },
  ],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class PartidaRoutingModule {

}

export const routedComponents = [
  PartidaComponent,
  PresupuestoContainerComponent,

];
