import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isAuth = false ;

  constructor() { }

  ngOnInit(): void {
  }

  logout() {
    //add method to clear token then
    this.isAuth = false;
    location.reload();
  }

}
