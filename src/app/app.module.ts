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
      SeanceCardComponent
    ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
