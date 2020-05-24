import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddRentUploadPageRoutingModule } from './add-rent-upload-routing.module';

import { AddRentUploadPage } from './add-rent-upload.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddRentUploadPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AddRentUploadPage]
})
export class AddRentUploadPageModule {}
