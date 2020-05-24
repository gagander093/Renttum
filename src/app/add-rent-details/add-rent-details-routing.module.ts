import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddRentDetailsPage } from './add-rent-details.page';

const routes: Routes = [
  {
    path: '',
    component: AddRentDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddRentDetailsPageRoutingModule {}
