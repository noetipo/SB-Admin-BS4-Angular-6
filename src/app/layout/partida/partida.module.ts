import {NgModule} from '@angular/core';
import {PartidaRoutingModule, routedComponents} from './partida-routing.module';
import {PresupuestoContainerComponent} from './presupuesto-container/presupuesto-container.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {PartidaService} from '../../../providers/services/partida/partida.service';
import {EstilosPartidaPipe} from './pipe/estilosPartidaPipe';
import {CommonModule} from '@angular/common';
import {NgbDatepicker} from '@ng-bootstrap/ng-bootstrap';
import {FilterPipe} from './pipe/filterPipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ValorizacionService} from '../../../providers/services';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FilterPipeModule} from 'ngx-filter-pipe';
import {ToasterModule} from 'angular2-toaster';

const COMPONENTS: any = [
    PresupuestoContainerComponent,
];
const SERVICES: any = [
    PartidaService,
    ValorizacionService,
];
const VENTAS_MODULES: any = [
    CommonModule,
    PartidaRoutingModule,
    NgxPaginationModule,
];
const ENTRY_COMPONETS: any = [];

@NgModule({
    imports: [
        FilterPipeModule,
        FormsModule,
        ReactiveFormsModule,
        ToasterModule.forRoot(),
        NgbModule.forRoot(),
        ...VENTAS_MODULES,
    ],
    declarations: [
        EstilosPartidaPipe,
        FilterPipe,
        ...routedComponents,
        ...COMPONENTS,


    ], providers: [...SERVICES,
    ], entryComponents: [...ENTRY_COMPONETS], exports: [FilterPipe],
})
export class PartidaModule {
}
