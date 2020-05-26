import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdsPackagesPageRoutingModule } from './ads-packages-routing.module';

import { AdsPackagesPage } from './ads-packages.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdsPackagesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AdsPackagesPage]
})
export class AdsPackagesPageModule {}
