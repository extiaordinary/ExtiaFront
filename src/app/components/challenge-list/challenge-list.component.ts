import { Component, OnInit } from '@angular/core';
import {ChallengeService} from "../../services/challenge.service";
import {Challenge} from "../../model/models";

@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.css']
})
export class ChallengeListComponent implements OnInit {

  myAcceptedChallenges: Challenge[] = [];

  constructor(private challengeService: ChallengeService) { }

  ngOnInit(): void {
    this.challengeService.getMyTodoChallenge().subscribe(
      (res) => {
        this.myAcceptedChallenges = res;
      },
    (err) => {
        console.log('une erreur est survenue' + err);
    }
    )
  }

}
