import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service'
@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    constructor(private _router: Router, private _loginService: LoginService) {

    }
    naviagateToHome() {
        this._router.navigateByUrl('home/dashboard');
    }
}