import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UserClassement} from "../model/models";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private api: HttpClient) {
  }

  getClassement() {
    return this.api.get<UserClassement[]>('users');
  }
}
