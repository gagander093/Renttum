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
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductFooterComponent } from './product-footer/product-footer.component';
import { CategoriesComponent } from './categories/categories.component';
import { WishlistCardComponent } from './wishlist-card/wishlist-card.component';
import { AddsBoxComponent } from './adds-box/adds-box.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AuthHeaderComponent,
    HeaderComponent,
    OtpInputComponent,
    HomeButtonsComponent,
    ThankYouModalComponent,
    RedeemModalComponent,
    FooterComponent,
    ProductCardComponent,
    ProductFooterComponent,
    CategoriesComponent,
    WishlistCardComponent,
    AddsBoxComponent
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
    FooterComponent,
    ProductCardComponent,
    ProductFooterComponent,
    CategoriesComponent,
    WishlistCardComponent,
    AddsBoxComponent
  ],
  entryComponents: [
    ThankYouModalComponent,
    RedeemModalComponent
  ]
})
export class ComponentsModule { }
