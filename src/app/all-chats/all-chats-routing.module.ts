import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllChatsPage } from './all-chats.page';

const routes: Routes = [
  {
    path: '',
    component: AllChatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllChatsPageRoutingModule {}
