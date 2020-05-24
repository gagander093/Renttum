import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddRentLoactionPage } from './add-rent-loaction.page';

const routes: Routes = [
  {
    path: '',
    component: AddRentLoactionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddRentLoactionPageRoutingModule {}
