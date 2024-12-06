import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home1Component } from './home1/home1.component';

const routes: Routes = [{path: 'HomeComponent', component: Home1Component}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
