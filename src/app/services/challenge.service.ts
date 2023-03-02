import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root',
})
export class ChallengeService {
  constructor(private api: HttpClient) {
  }

  // TODO: add response type
  getOwnChallengesByOwnerId(ownerId: string){
    return this.api.get(`challenge/ownChallenges/${ownerId}`)
  }

  // Header is necessary to know ho is the user
  getMyTodoChallenge(){
    this.api.get(`challenge/toDoChallenges/`, {
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
    return this.api.get(`challenge/${challengeId}`)
  }
}
