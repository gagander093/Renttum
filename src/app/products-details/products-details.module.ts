import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsDetailsPageRoutingModule } from './products-details-routing.module';

import { ProductsDetailsPage } from './products-details.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsDetailsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ProductsDetailsPage]
})
export class ProductsDetailsPageModule {}
