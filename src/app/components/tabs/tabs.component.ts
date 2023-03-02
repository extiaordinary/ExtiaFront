import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  
  tab1 = "classement";
  tab2 = "seances";
  tab3 = "challenge";
  currentTab = "classement";

  constructor() { }

  ngOnInit(): void {
  }

  setTab(index : string){
    this.currentTab = index;
  }

}
