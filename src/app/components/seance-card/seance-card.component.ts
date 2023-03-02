import {Component, Input, OnInit} from '@angular/core';
import {SeanceList} from "../../model/models";
import {SeanceService} from "../../services/seance.service";

@Component({
  selector: 'app-seance-card',
  templateUrl: './seance-card.component.html',
  styleUrls: ['./seance-card.component.css']
})
export class SeanceCardComponent implements OnInit {

  @Input() seanceCard: SeanceList | null = null;

  constructor(private seanceService: SeanceService) { }

  ngOnInit(): void {
  }

  // TODO: manage join button, can't join twice
  joinSeance(){
    if(this.seanceCard){
      this.seanceService.joinSeance(this.seanceCard.id).subscribe(
        () => {
          console.log("Vous avez rejoins la seance");
        },
        () => {
          console.log("Une erreur est survenue");
        }
      )
    }
  }
}
