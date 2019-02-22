import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {IResponse} from '../response';

@Injectable()
export class PartidaService {
    private url: string = 'consulta-seguro/';


    constructor(private http: HttpClient) {
    }

    postConsultaSeguro$(data: object): Observable<IResponse> {
        return this.http.post<IResponse>(this.url, data);
    }
}
