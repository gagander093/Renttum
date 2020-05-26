import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdsPackagesPage } from './ads-packages.page';

const routes: Routes = [
  {
    path: '',
    component: AdsPackagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdsPackagesPageRoutingModule {}
