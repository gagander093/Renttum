import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdsPackagesPayPageRoutingModule } from './ads-packages-pay-routing.module';

import { AdsPackagesPayPage } from './ads-packages-pay.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdsPackagesPayPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AdsPackagesPayPage]
})
export class AdsPackagesPayPageModule {}
