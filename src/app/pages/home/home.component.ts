import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  array = [1,1,1,1,1,1,1,1,1,1];

  constructor() { }

  ngOnInit(): void {
  }

}
