import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyAddsPageRoutingModule } from './my-adds-routing.module';

import { MyAddsPage } from './my-adds.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    MyAddsPageRoutingModule
  ],
  declarations: [MyAddsPage]
})
export class MyAddsPageModule {}
