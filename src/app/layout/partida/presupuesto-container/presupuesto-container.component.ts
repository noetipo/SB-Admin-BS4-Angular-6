import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PartidaService} from '../../../../providers/services/partida/partida.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FilterPipe} from 'ngx-filter-pipe';

@Component({
    selector: 'app-presupuesto-container',
    templateUrl: './presupuesto-container.component.html',
    styleUrls: ['./presupuesto-container.component.scss'],
})
export class PresupuestoContainerComponent implements OnInit {
    public error: string;
    public data: any;
    p: any;
    public consultaForm: FormGroup;
    public message: string;

    constructor(private partidaService: PartidaService,
                private router: Router,
                private formBuilder: FormBuilder,
                private filterPipe: FilterPipe) {
    }

    ngOnInit() {
        this.consultaForm = this.formBuilder.group({
            dni: ['', [Validators.required]],
        });

    }

    public consultaSeguro(): void {
        if (this.consultaForm.valid) {
            this.data = undefined;
            this.message = undefined;
            this.partidaService.postConsultaSeguro$(this.consultaForm.value).subscribe(response => {
                if (response.data !== 'Paciente Sin Seguro!!') {
                    this.data = response[0];
                } else {
                    this.message = response.data;
                }
            });
        }
    }


}
