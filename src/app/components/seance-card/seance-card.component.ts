import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seance-card',
  templateUrl: './seance-card.component.html',
  styleUrls: ['./seance-card.component.css']
})
export class SeanceCardComponent implements OnInit {
  isRegisteredOnSeance = false;

  sportName = {
    'Musculation': "Musculation",
    'Yoga': "Yoga",
    'Running': "Running"
  }
  sportShortDescriptionDictionary = {
    'Musculation': "Salle de muscu avec machines. Pompes, abdos, squats, tout y est. Le corps de reve vous attend !",
    'Yoga': "Relaxation, meditation, visualisation, etc. Votre esprit ne demande que ça . Place limitées ...",
    'Running': "En salle ou à l'exterieur ! Les kilomètres ne demandent qu'à etre parcourues."
  }

  constructor() { }

  ngOnInit(): void {
  }

  registerOnSeance() {
    this.isRegisteredOnSeance = !this.isRegisteredOnSeance;
    //call API to register on seance
  }

  cancelRegistrationOnSeance() {
    this.isRegisteredOnSeance = !this.isRegisteredOnSeance;
    //call API to cancel registration on seance
  }

  challengeFriend() {
    //call API to challenge friend

  }


}
