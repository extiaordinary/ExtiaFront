import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
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
    }
  }

}
