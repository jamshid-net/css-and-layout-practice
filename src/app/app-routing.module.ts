import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'page', loadChildren: () => import('./page/page.module').then(m => m.PageModule) }, { path: 'page2', loadChildren: () => import('./page2/page2.module').then(m => m.Page2Module) }, { path: 'page3', loadChildren: () => import('./page3/page3.module').then(m => m.Page3Module) }, { path: 'page5', loadChildren: () => import('./page5/page5.module').then(m => m.Page5Module) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
