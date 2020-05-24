import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddRentUploadPage } from './add-rent-upload.page';

const routes: Routes = [
  {
    path: '',
    component: AddRentUploadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddRentUploadPageRoutingModule {}
