import {Injectable} from '@angular/core';
import {HttpRequest, HttpEvent, HttpHandler, HttpInterceptor} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';


@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
    private token: any = 'InitialAuthorizationToken';
    private header: any;

    constructor() {
    }

    private subscribeToTokenChanges() {
        this.token = localStorage.getItem('Token');
    }


    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.subscribeToTokenChanges();
        const authorizationReq = this.token ? this.setAuthHeader(req) : req;
        const urlReq = this.setUrl(authorizationReq);
        const handleRequest = next.handle(urlReq);
        return handleRequest;
    }

    private setAuthHeader(req: HttpRequest<any>): HttpRequest<any> {
        const authorization = this.token;
        this.header = req.headers
            .set('Content-Type', 'application/json')
            .set('Authorization', 'Bearer ' + authorization);
        const authorizationReq = req.clone({headers: this.header});
        return authorizationReq;
    }

    private setUrl(req: HttpRequest<any>): HttpRequest<any> {
        if (!req.url.includes('assets/')) {
            return req.clone({url: `${environment.urls}${req.url}`});
        } else {
            return req.clone({url: `${req.url}`});
        }

    }

}
