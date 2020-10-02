import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user.model';
@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private readonly JWT_TOKEN: string = 'JWT_TOKEN';
    private readonly REFRESH_TOKEN: string = 'REFRESH_TOKEN';
    private loggedUser: string;

    constructor(private http: HttpClient) { }

    login(user: { userName: string, password: string }): Observable<boolean> {
        return this.http.post<any>(`http://localhost:3000/login`, user)
    }

    register(user: User): Observable<User> {
        return this.http.post<User>(`http://loocalhost:3000/register`, user);
    }

    isLoggedIn(): any {
        return !!this.getJwtToken();
    }

    getJwtToken(): any {
        return localStorage.getItem(this.JWT_TOKEN);
    }
}
