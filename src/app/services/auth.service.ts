import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { tap } from 'rxjs';
import {JwtToken, RegisterDto} from "../model/models";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _token: JwtToken | null = AuthService.getToken();

  constructor(private api: HttpClient, private userService: UserService) {
    // TODO: for disconnect when token expires
    // this.api.get<User>('auth/me', { withCredentials: true }).subscribe({
    //   next: (user) => {
    //     this._user = user;
    //     AuthService.storeUser(user);
    //   },
    //   error: () => {
    //     this._user = null;
    //     localStorage.removeItem('user');
    //   },
    // });
  }

  get token(): JwtToken {
    return Object.assign({}, this._token);
  }

  get isAuthenticated(): boolean {
    return this._token != null;
  }

  static getToken(): JwtToken | null {
    const token = localStorage.getItem('token');
    return token ? JSON.parse(token) : null;
  }

  private static storeToken(token: JwtToken) {
    localStorage.setItem('token', JSON.stringify(token));
  }

  authenticate(email: string, password: string) {
    return this.api
      .post<JwtToken>('auth/authenticate', { email, password },)
      .pipe(
        tap((token) => {
          this._token = token;
          AuthService.storeToken(token);
          this.userService.getMe().subscribe((user) => {
            UserService.storeUser(user);
          })
        }),
      );
  }

  register(data: RegisterDto) {
    console.log(data);
    return this.api
      .post<JwtToken>('auth/register', data)
      .pipe(
        tap((user) => {
          this._token = user;
          AuthService.storeToken(user);
        }),
      );
  }
}
