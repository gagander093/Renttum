import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnquiryPageRoutingModule } from './enquiry-routing.module';

import { EnquiryPage } from './enquiry.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnquiryPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EnquiryPage]
})
export class EnquiryPageModule {}
