import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdsPackagesPayPage } from './ads-packages-pay.page';

const routes: Routes = [
  {
    path: '',
    component: AdsPackagesPayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdsPackagesPayPageRoutingModule {}
