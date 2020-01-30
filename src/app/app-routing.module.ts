import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarreOutilsComponent } from './barre-outils/barre-outils.component';

const routes: Routes = [
  {path:'' ,redirectTo:'BarreOutils',pathMatch:'full'},
  {path:'BarreOutils' ,component:BarreOutilsComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
