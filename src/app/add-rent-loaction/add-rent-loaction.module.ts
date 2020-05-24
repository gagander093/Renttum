import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddRentLoactionPageRoutingModule } from './add-rent-loaction-routing.module';

import { AddRentLoactionPage } from './add-rent-loaction.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddRentLoactionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AddRentLoactionPage]
})
export class AddRentLoactionPageModule {}
