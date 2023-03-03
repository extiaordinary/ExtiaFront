import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Route, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isAuth = false ;

  constructor(private router : Router, private authService: AuthService, private userService: UserService) { }

  ngOnInit(): void {
    this.isAuth = this.authService.isAuthenticated;
  }

  logout() {
    //add method to clear token then
    this.isAuth = false;
    location.reload();
  }

  challengeProposed(){
    this.router.navigate(['/challenge-user', {ownerId: UserService.getUser()?.id}]).then();
  }
}
