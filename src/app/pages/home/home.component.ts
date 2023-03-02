import { Component, OnInit } from '@angular/core';
import {SeanceList} from "../../model/models";
import {SeanceService} from "../../services/seance.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tabSeances: SeanceList[] = []

  constructor(private seanceService: SeanceService) { }

  ngOnInit(): void {
    this.seanceService.getAll().subscribe(
      (res) => {
        this.tabSeances = res;
      },
      (error) => {
        console.log(error);
      })
  }

}
