import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page5Component } from './page5.component';

const routes: Routes = [{ path: '', component: Page5Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Page5RoutingModule { }
