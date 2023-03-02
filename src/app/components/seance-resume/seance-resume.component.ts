import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seance-resume',
  templateUrl: './seance-resume.component.html',
  styleUrls: ['./seance-resume.component.css']
})
export class SeanceResumeComponent implements OnInit {
  isEdit = true;
  constructor() { }

  ngOnInit(): void {
  }

  editForm() {
    this.isEdit = !this.isEdit;
  }

}
