import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { LoginModel } from '../models/login.interface';
import {LoginResponseModel} from '../models/login-response.interface';


@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private apiBaseUrl = environment.apiUrl;
    constructor(private httpClient: HttpClient) {
    }

    authenticateUser(loginModel: LoginModel): Observable<LoginResponseModel> {
        return this.httpClient.post<LoginResponseModel>(`${this.apiBaseUrl}login`, loginModel);
    }
}