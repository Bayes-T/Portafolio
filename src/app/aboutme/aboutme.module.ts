import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutmeRoutingModule } from './aboutme-routing.module';
import { Aboutmepage } from './components/aboutmepage/aboutmepage.component';


@NgModule({
  declarations: [
    Aboutmepage
  ],
  imports: [
    CommonModule,
    AboutmeRoutingModule
  ]
})
export class AboutmeModule { }
