import {CommonModule} from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthGuard} from './shared';
import {AuthService} from '../providers';
import {APP_BASE_HREF} from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FilterPipeModule } from 'ngx-filter-pipe';
import {
    PermisoGuardService,
    TokenInterceptorService,
    BusService,
    CatchInterceptorService,
} from '../providers';

// AoT requires an exported function for factories
export const createTranslateLoader = (http: HttpClient) => {
    /* for development
    return new TranslateHttpLoader(
        http,
        '/start-angular/SB-Admin-BS4-Angular-6/master/dist/assets/i18n/',
        '.json'
    ); */
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

@NgModule({
    imports: [
        FilterPipeModule,
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        NgbModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule
    ],
    declarations: [AppComponent],
    providers: [AuthGuard,
        BusService,
        AuthService,
        PermisoGuardService, {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptorService,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: CatchInterceptorService,
            multi: true,
        },
        {provide: APP_BASE_HREF, useValue: '/'}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
