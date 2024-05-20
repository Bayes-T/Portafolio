import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Aboutmepage} from "./components/aboutmepage/aboutmepage.component";

const routes: Routes = [
  {
    path: '',
    component: Aboutmepage,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutmeRoutingModule { }
