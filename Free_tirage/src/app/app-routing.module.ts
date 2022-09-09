import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeTireComponent } from './liste-tire/liste-tire.component';
import { TirageComponent } from './tirage/tirage.component';

const routes: Routes = [
  {
    path:"tirage",
    component:TirageComponent
  },
  {
    path:"listtire",
    component:ListeTireComponent
  },
  {
    path:"accueil",
    component:AccueilComponent
  },


  {
    path:"",
    redirectTo:"accueil",
    pathMatch:'full'
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
