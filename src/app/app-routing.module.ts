import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    // canActivate: [AuthGuard],
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'enquiry/:id',
    loadChildren: () => import('./enquiry/enquiry.module').then( m => m.EnquiryPageModule)
  },
  {
    path: 'refer',
    loadChildren: () => import('./refer/refer.module').then( m => m.ReferPageModule)
  },
  {
    path: 'redeem',
    loadChildren: () => import('./redeem/redeem.module').then( m => m.RedeemPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'set-password',
    loadChildren: () => import('./set-password/set-password.module').then( m => m.SetPasswordPageModule)
  },
  {
    path: 'products-list/:id',
    loadChildren: () => import('./products-list/products-list.module').then( m => m.ProductsListPageModule)
  },
  {
    path: 'products-details',
    loadChildren: () => import('./products-details/products-details.module').then( m => m.ProductsDetailsPageModule)
  },
  {
    path: 'all-categories',
    loadChildren: () => import('./all-categories/all-categories.module').then( m => m.AllCategoriesPageModule)
  },
  {
    path: 'wishlist',
    loadChildren: () => import('./wishlist/wishlist.module').then( m => m.WishlistPageModule)
  },  {
    path: 'my-adds',
    loadChildren: () => import('./my-adds/my-adds.module').then( m => m.MyAddsPageModule)
  },
  {
    path: 'add-rent-upload',
    loadChildren: () => import('./add-rent-upload/add-rent-upload.module').then( m => m.AddRentUploadPageModule)
  },
  {
    path: 'add-rent-details',
    loadChildren: () => import('./add-rent-details/add-rent-details.module').then( m => m.AddRentDetailsPageModule)
  },
  {
    path: 'add-rent-price',
    loadChildren: () => import('./add-rent-price/add-rent-price.module').then( m => m.AddRentPricePageModule)
  },
  {
    path: 'add-rent-loaction',
    loadChildren: () => import('./add-rent-loaction/add-rent-loaction.module').then( m => m.AddRentLoactionPageModule)
  },
  {
    path: 'sub-categories',
    loadChildren: () => import('./sub-categories/sub-categories.module').then( m => m.SubCategoriesPageModule)
  }





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
