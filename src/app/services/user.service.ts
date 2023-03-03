import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserClassement, UserResponse} from "../model/models";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private api: HttpClient) {
  }

  getClassement() {
    return this.api.get<UserClassement[]>('users');
  }

  getMe(){
    return this.api.get<UserResponse>("users/me", {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${AuthService.getToken()?.token}`
      })
    })
  }

  static getUser(): UserResponse | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  static storeUser(user: UserResponse) {
    localStorage.setItem('user', JSON.stringify(user));
  }
}
