import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddRentPricePageRoutingModule } from './add-rent-price-routing.module';

import { AddRentPricePage } from './add-rent-price.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddRentPricePageRoutingModule,
    ComponentsModule
  ],
  declarations: [AddRentPricePage]
})
export class AddRentPricePageModule {}
