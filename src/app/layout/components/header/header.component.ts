import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {AuthService} from '../../../../providers/services';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    pushRightClass: string = 'push-right';
    private redirectUrl: string = 'login';
    constructor(private translate: TranslateService, public router: Router, private authService: AuthService) {

        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {

        this.authService.logoutBack$().subscribe(response => {
            if (response) {
                localStorage.removeItem('Token');
                localStorage.removeItem('isLoggedin');
                this.goToUrl(this.redirectUrl);
            }
        });

    }

    changeLang(language: string) {
        this.translate.use(language);
    }
    private goToUrl(url): void {
        this.router.navigate([url]);
    }
}
