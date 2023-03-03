import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {Challenge} from "../model/models";

@Injectable({
  providedIn: 'root',
})
export class ChallengeService {
  constructor(private api: HttpClient) {
  }

  // TODO: add response type for all
  getOwnChallengesByOwnerId(ownerId: string){
    return this.api.get<Challenge[]>(`challenge/ownChallenges/${ownerId}`);
  }

  // Header is necessary to know ho is the user
  getMyTodoChallenge(){
    return this.api.get<Challenge[]>(`challenge/toDoChallenges/`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${AuthService.getToken()?.token}`
      })
    })
  }

  // Header is necessary to know ho is the user
  acceptChallenge(challengeId: string){
    return this.api.post(`challenge/accept/${challengeId}`, {}, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${AuthService.getToken()?.token}`
      })
    })
  }

  getChallengeDetail(challengeId: string){
    return this.api.get<Challenge>(`challenge/${challengeId}`)
  }
}
