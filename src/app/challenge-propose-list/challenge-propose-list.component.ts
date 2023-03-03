import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-challenge-propose-list',
  templateUrl: './challenge-propose-list.component.html',
  styleUrls: ['./challenge-propose-list.component.css']
})
export class ChallengeProposeListComponent implements OnInit {

  @Input() showButton = true;

  challArray = [
    {
      id:"1",
      sport: "Football",
      description: "10 pompes 10 tractions etc",
      tag: "difficile"
    },
    {
      id:"2",
      sport: "Football",
      description: "10 pompes 10 tractions etc",
      tag: "difficile"
    },
    {
      id:"3",
      sport: "Football",
      description: "10 pompes 10 tractions etc",
      tag: "difficile"
    }
  ]

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // { orderby: "price" }
        //params.orderby;
      }
    );
  }

  signInToAccept(challengeId: any) {
    this.router.navigate(['/login'], {state: {data: { id: challengeId}}});
  }

}
