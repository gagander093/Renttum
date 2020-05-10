import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { AuthHeaderComponent } from './auth-header/auth-header.component';
import { OtpInputComponent } from './otp-input/otp-input.component';
import { HomeButtonsComponent } from './home-buttons/home-buttons.component';
import { ThankYouModalComponent } from './thank-you-modal/thank-you-modal.component';
import { RedeemModalComponent } from './redeem-modal/redeem-modal.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AuthHeaderComponent,
    HeaderComponent,
    OtpInputComponent,
    HomeButtonsComponent,
    ThankYouModalComponent,
    RedeemModalComponent,
    FooterComponent
  ],
  imports: [
    FormsModule,
    IonicModule,
    RouterModule,
    CommonModule
  ],
  exports: [
    AuthHeaderComponent,
    HeaderComponent,
    OtpInputComponent,
    HomeButtonsComponent,
    ThankYouModalComponent,
    RedeemModalComponent,
    FooterComponent
  ],
  entryComponents: [
    ThankYouModalComponent,
    RedeemModalComponent
  ]
})
export class ComponentsModule { }
