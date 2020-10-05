import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user.model';
import { catchError, map, mapTo, tap } from 'rxjs/operators';
import { Tokens } from '../_models/tokens.model';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private readonly JWT_TOKEN: string = 'JWT_TOKEN';
    private readonly REFRESH_TOKEN: string = 'REFRESH_TOKEN';
    private loggedUser: string;

    private URL: string = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    login(user: { email: string, password: string }): Observable<boolean> {
        return this.http.post<any>(`${this.URL}/auth/login`, user)
            .pipe(
                tap(tokens => this.doLoginUser(user.email, tokens)));

    }

    register(user: User): Observable<User> {
        return this.http.post<User>(`${this.URL}/auth/register`, user);
    }

    isLoggedIn(): any {
        return !!this.getJwtToken();
    }

    getJwtToken(): any {
        return localStorage.getItem(this.JWT_TOKEN);
    }

    private doLoginUser(userEmail: string, tokens: Tokens): void {
        this.loggedUser = userEmail;
        this.storeTokens(tokens);
    }

    private storeTokens(tokens: Tokens): void {
        localStorage.setItem(this.JWT_TOKEN, tokens.jwt);
        localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
    }
}
