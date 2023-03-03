import {Component, Input} from '@angular/core';
import {SeanceList} from "../../model/models";
import {SeanceService} from "../../services/seance.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-seance-card',
  templateUrl: './seance-card.component.html',
  styleUrls: ['./seance-card.component.css']
})
export class SeanceCardComponent {
  @Input() seanceCard: SeanceList | null = null;

  isInSeance = false;
  isCoach = false;

  constructor(private seanceService: SeanceService, private authService: AuthService) { }

  ngOnInit(): void {
    if (this.seanceCard?.id && this.authService.isAuthenticated){
      console.log(this.seanceCard);
      this.seanceService.IsUserJoinedSeance(this.seanceCard.id).subscribe(
        (isInSeance) => {
          if(this.seanceCard){
            this.isInSeance = isInSeance.isCollaborator;
            this.isCoach = isInSeance.isCoach;
          }
        }
      )
    }
  }

  showRegisterToSeance(){
    console.log("show register" + this.seanceCard?.name + " " + this.isInSeance);
    if(!this.isCoach){
      return !this.isInSeance;
    }
    return false;
  }

  showCancelRegisterToSeance(){
    if(!this.isCoach){
      return this.isInSeance;
    }
    return false;
  }

  registerOnSeance() {
    if(this.seanceCard){
      this.seanceService.joinSeance(this.seanceCard.id).subscribe(
        () => {
          console.log("Vous avez rejoins la seance");
          if(this.seanceCard){
            this.isInSeance = true;
          }
        },
        (err) => {
          console.log("Une erreur est survenue" + err.toString());
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
