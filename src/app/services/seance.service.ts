import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SeanceList} from "../model/models";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root',
})
export class SeanceService {
  constructor(private api: HttpClient) {
  }

  getAll(){
    return this.api.get<SeanceList[]>("seance");
  }

  joinSeance(seanceId: string) {
    // TODO: This will return string, on success refresh ?
    return this.api.post(`seance/addUser/${seanceId}`, {}, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${AuthService.getToken()?.token}`
      })
    });
  }


}
