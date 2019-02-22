import {Pipe, PipeTransform} from '@angular/core';
import {Partida} from '../models/partida';
@Pipe({name: 'estilosPartida'})
export class EstilosPartidaPipe implements PipeTransform {
    transform(value: Partida, exponent: string): string {
        const data = value.orden.split('.');
        if (value.unidad === '' && data.length <= 1) {
            return 'titulo1';
        } else if (value.unidad === '' && data.length > 1) {
            return 'titulo2';
        } else {
            return 'partida';
        }

    }
}
