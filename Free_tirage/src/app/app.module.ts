import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { TirageComponent } from './tirage/tirage.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListeTireComponent } from './liste-tire/liste-tire.component';

@NgModule({
  declarations: [
    AppComponent,
    //test
    AccueilComponent,
    TirageComponent,
    ListeTireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
