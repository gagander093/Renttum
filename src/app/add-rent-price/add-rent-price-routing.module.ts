import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddRentPricePage } from './add-rent-price.page';

const routes: Routes = [
  {
    path: '',
    component: AddRentPricePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddRentPricePageRoutingModule {}
