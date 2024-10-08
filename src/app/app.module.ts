import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProfilComponent } from './components/profil/profil.component';
import {FooterComponent} from "./components/footer/footer.component";
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SeanceCardComponent } from './components/seance-card/seance-card.component';
import { SeanceResumeComponent } from './components/seance-resume/seance-resume.component';
import { SeanceListComponent } from './components/seance-list/seance-list.component';
import { ClassementListComponent } from './components/classement-list/classement-list.component';
import { ChallengeListComponent } from './components/challenge-list/challenge-list.component';
import {interceptors} from "./api/interceptor";
import { HttpClientModule } from "@angular/common/http";
import { ChallengeProposeListComponent } from './challenge-propose-list/challenge-propose-list.component';
import { ChallengeProposedComponent } from './components/challenge-proposed/challenge-proposed.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavBarComponent,
        FooterComponent,
      ProfilComponent,
      LoginComponent,
      RegisterComponent,
      TabsComponent,
      SeanceCardComponent,
      SeanceResumeComponent,
      SeanceListComponent,
      ClassementListComponent,
      ChallengeListComponent,
      ChallengeProposeListComponent,
      ChallengeProposedComponent
    ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [interceptors],
  bootstrap: [AppComponent]
})
export class AppModule { }
