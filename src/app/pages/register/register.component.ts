import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm: any;
  constructor(private fb: FormBuilder) { }

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
    }
  }
}