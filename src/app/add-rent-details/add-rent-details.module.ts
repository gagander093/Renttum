import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddRentDetailsPageRoutingModule } from './add-rent-details-routing.module';

import { AddRentDetailsPage } from './add-rent-details.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddRentDetailsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AddRentDetailsPage]
})
export class AddRentDetailsPageModule {}
