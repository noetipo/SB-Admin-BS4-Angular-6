import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {IResponse} from '../response';

@Injectable()
export class ValorizacionService {

    private url: string = 'valorizacion';

    constructor(private http: HttpClient) {
    }

    postValorizacion$(rol: object): Observable<IResponse> {
        return this.http.post<IResponse>(this.url, rol);
    }
}
