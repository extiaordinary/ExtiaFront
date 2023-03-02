import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Role} from "../../model/models";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm: any;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.initUserForm();
  }

  initUserForm(){
    this.userForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['COLLABORATEUR'],
      dateOfBirth: ['', Validators.required]
      })
  }

  submitUser() {
    if(!this.userForm.invalid) {
      console.log("valid");
      const data = {
        email: this.userForm.value.email,
        password: this.userForm.value.password,
        firstname: this.userForm.value.firstname,
        lastname: this.userForm.value.lastname,
        dateOfBirth: this.userForm.value.dateOfBirth,
        role: Role.Collaborator
      };

      this.authService.register(data).subscribe({
        next: () => {
          this.router.navigate(['home']).then();
        },
        error: () => {
          console.log("une erreur est survenue");
        }
      });
    }
  }
}
