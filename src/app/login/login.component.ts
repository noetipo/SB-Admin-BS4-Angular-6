import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {routerTransition} from '../router.animations';
import {AuthService} from '../../providers/services';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup;
    private redirectUrl: string = 'dashboard';
    constructor(public router: Router, private authService: AuthService, private formBuilder: FormBuilder) {
        this.loginForm = this.formBuilder.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required]],
        });
        if (localStorage.getItem('isLoggedin')) {
            this.goToUrl(this.redirectUrl);
        }

    }

    ngOnInit() {
    }

    login() {
        if (this.loginForm.valid) {
            this.authService.authenticate$(this.loginForm.value).subscribe(resnponse => {
                localStorage.setItem('isLoggedin', 'true');
                localStorage.setItem('Token', resnponse.access);
                this.goToUrl(this.redirectUrl);
            });

        }

    }

    private goToUrl(url): void {
        this.router.navigate([url]);
    }

}
