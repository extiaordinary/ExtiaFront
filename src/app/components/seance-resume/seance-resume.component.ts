import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seance-resume',
  templateUrl: './seance-resume.component.html',
  styleUrls: ['./seance-resume.component.css']
})
export class SeanceResumeComponent implements OnInit {
  isEdit = true;
  seanceName = 'Muscu';
  seanceDate = '2021-01-01';

  constructor() { }

  ngOnInit(): void {
  }

  editForm() {
    this.isEdit = !this.isEdit;
  }

  sportObject = {
    name: 'Muscu',
    dateStart: '2021-01-01',
    dateEnd : '2021-28-01',
    duration: '1h',
    description: 'Salle de muscu avec des machines. De nombreuses catégories de machines sont disponibles : cardio, musculation, haltères, poids libres, etc. Inscrivez-vous pour profiter de nos machines et de nos cours collectifs. N\'oubliez pas de challengez vos amis si vous vous en sentez capables !',
  } ;


}
