import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';
import { PharmacysComponent } from './pharmacys/pharmacys.component';
import { PharmacysformComponent } from './pharmacysform/pharmacysform.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"pharmacys", component:PharmacysComponent},
  {path: "ingresar", component:PharmacysformComponent},
  { path: '404', component: Error404Component },
  { path: '**', redirectTo: '404', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
