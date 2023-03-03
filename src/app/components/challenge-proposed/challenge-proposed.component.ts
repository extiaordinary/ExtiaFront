import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Form, FormBuilder, Validators} from "@angular/forms";
import {CreateChallenge, Role} from "../../model/models";
import {ChallengeService} from "../../services/challenge.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-challenge-proposed',
  templateUrl: './challenge-proposed.component.html',
  styleUrls: ['./challenge-proposed.component.css']
})
export class ChallengeProposedComponent implements OnInit {

  challengeForm: any;

  constructor(private fb: FormBuilder, private challengeService: ChallengeService, private router: Router ) { }

  ngOnInit(): void {
    this.initChallengeForm();
  }

  initChallengeForm(){
    this.challengeForm = this.fb.group({
      typeSport: ['', Validators.required],
      description: ['', Validators.required],
      tag: ['', Validators.required],
      dateStart: ['', Validators.required],
      dateEnd: ['', Validators.required],
      isAchieved: [false],
      seance: ['', Validators.required],
    })
  }

  submitChallenge(){
    if(!this.challengeForm.invalid) {
      console.log("valid");
      const data: CreateChallenge = {
        dateEnd: this.challengeForm.value.dateStart,
        dateStart: this.challengeForm.value.dateEnd,
        description: this.challengeForm.value.description,
        isAchieved: this.challengeForm.value.isAchieved,
        tag: "LOW",
        typeSport: this.challengeForm.value.typeSport,
        workout: this.challengeForm.value.seance,
      };

      this.challengeService.createChallenge(data).subscribe({
        next: () => {
          this.router.navigate(['challenge-user', {ownerId: UserService.getUser()?.id}]).then();
        },
        error: () => {
          console.log("une erreur est survenue");
        }
      });
    }
  }
}
