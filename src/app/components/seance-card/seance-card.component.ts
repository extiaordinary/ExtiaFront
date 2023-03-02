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

  isUserRegisteredOnSeance() {
    return this.seanceCard?.isUserInSeance;
  }

  registerOnSeance() {
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

  cancelRegistrationOnSeance() {
    // this.isRegisteredOnSeance = !this.isRegisteredOnSeance;
    //call API to cancel registration on seance
    console.log("TODO");
  }

  challengeFriend() {
    //call API to challenge friend

  }

}
