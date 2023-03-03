import { Component, OnInit } from '@angular/core';
import {SeanceList} from "../../model/models";
import {SeanceService} from "../../services/seance.service";

@Component({
  selector: 'app-seance-list',
  templateUrl: './seance-list.component.html',
  styleUrls: ['./seance-list.component.css']
})
export class SeanceListComponent implements OnInit {

  seances: SeanceList[] = [];

  constructor(private seanceService: SeanceService) { }

  ngOnInit(): void {
    this.seanceService.getJoinedSeances().subscribe(
      (res) => {
        this.seances = res
      },
      (err) => {console.log(err)}
    )
  }

}
