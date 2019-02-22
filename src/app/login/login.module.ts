import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthService} from '../../providers/services';
import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [FormsModule,
        ReactiveFormsModule,
        CommonModule,
        LoginRoutingModule],
    providers: [
        AuthService,
    ],
    declarations: [LoginComponent]
})
export class LoginModule {
}
