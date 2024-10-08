import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isAuth = false ;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  logout() {
    //add method to clear token then
    this.isAuth = false;
    location.reload();
  }

  challengeProposed(){
    this.router.navigate(['/challengesProposed']);
  }
}
