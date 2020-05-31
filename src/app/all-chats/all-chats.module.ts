import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllChatsPageRoutingModule } from './all-chats-routing.module';
import { ComponentsModule } from '../components/components.module';

import { AllChatsPage } from './all-chats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllChatsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AllChatsPage]
})
export class AllChatsPageModule {}
