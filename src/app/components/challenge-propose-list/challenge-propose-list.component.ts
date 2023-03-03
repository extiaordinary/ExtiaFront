import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ChallengeService } from 'src/app/services/challenge.service';
import {Challenge} from "../../model/models";

@Component({
  selector: 'app-challenge-propose-list',
  templateUrl: './challenge-propose-list.component.html',
  styleUrls: ['./challenge-propose-list.component.css']
})
export class ChallengeProposeListComponent implements OnInit {

  @Input() showButton = true;

  challArray: Challenge[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private challengeService: ChallengeService, private authService: AuthService) { }

  ngOnInit(): void {
    const owner = this.route.snapshot.paramMap.get('ownerId');
    if(owner) {
      this.challengeService.getOwnChallengesByOwnerId(owner).subscribe(
        (challenge) => {
          this.challArray = challenge;
        }
      )
    }
  }

  signInToAccept(challengeId: any) {
    if (this.authService.isAuthenticated) {
      this.challengeService.acceptChallenge(challengeId);
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/login'], {state: {data: { id: challengeId}}});
    }
  }

}
