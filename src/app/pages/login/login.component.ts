import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import { ChallengeService } from 'src/app/services/challenge.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any;
  challengerId = null;

  constructor(private fb: FormBuilder, private authService: AuthService, 
    private router: Router,
    private challengeService: ChallengeService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params
      .subscribe(params => {
        this.challengerId = params['id'];
      }
    );

    this.initUserForm();
  }

  initUserForm(){
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      })
  }

  signIn() {
    if(!this.loginForm.invalid) {
      console.log("userform: ", this.loginForm.value);
      const data = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      }
      this.authService.authenticate(data.email, data.password).subscribe({
        next: () => {
          if(this.challengerId != null){
            console.log(this.challengerId)
            //this.challengeService.acceptChallenge(this.challengerId);
          }
          this.router.navigate(['home']).then();
        },
        error: () => {
          console.log("une erreur est survenue");
        }
      });
    }
  }

}
