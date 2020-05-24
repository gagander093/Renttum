import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyAddsPage } from './my-adds.page';

const routes: Routes = [
  {
    path: '',
    component: MyAddsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyAddsPageRoutingModule {}
