import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {ChallengeProposedComponent} from "./components/challenge-proposed/challenge-proposed.component";
import { ChallengeProposeListComponent } from './challenge-propose-list/challenge-propose-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'challengesProposed', component: ChallengeProposedComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'challenge-propose', component: ChallengeProposeListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
