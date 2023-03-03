import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {UserClassement} from "../../model/models";

@Component({
  selector: 'app-classement-list',
  templateUrl: './classement-list.component.html',
  styleUrls: ['./classement-list.component.css']
})
export class ClassementListComponent implements OnInit {

  classement: UserClassement[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getClassement().subscribe(
      (res) => { this.classement = res},
      (err) => {console.log(err)}
    )
  }
}
