import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProfilComponent } from './components/profil/profil.component';
import {FooterComponent} from "./components/footer/footer.component";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavBarComponent,
        FooterComponent,
      ProfilComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
