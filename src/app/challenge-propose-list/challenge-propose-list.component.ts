import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ChallengeService } from '../services/challenge.service';

@Component({
  selector: 'app-challenge-propose-list',
  templateUrl: './challenge-propose-list.component.html',
  styleUrls: ['./challenge-propose-list.component.css']
})
export class ChallengeProposeListComponent implements OnInit {

  @Input() showButton = true;

  challArray: any;

  constructor(private router: Router, private route: ActivatedRoute, private challengeService: ChallengeService, private authService: AuthService) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.challArray = this.challengeService.getOwnChallengesByOwnerId(params['ownerid']);
      }
    );
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
