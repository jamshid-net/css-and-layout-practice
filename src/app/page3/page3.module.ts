import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page3RoutingModule } from './page3-routing.module';
import { Page3Component } from './page3.component';
import { Page4Component } from '../page4/page4.component';




@NgModule({
  declarations: [
    Page3Component,
    Page4Component
  ],
  imports: [
    CommonModule,
    Page3RoutingModule,
    
  ]
})
export class Page3Module { }
