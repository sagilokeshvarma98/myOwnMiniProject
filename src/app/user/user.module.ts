import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProductsDisplayComponent } from './products-display/products-display.component';
import { CartNotifyComponent } from './cart-notify/cart-notify.component';
import { CartButtonComponent } from './cart-button/cart-button.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    UserProfileComponent,
    ProductsDisplayComponent,
    CartNotifyComponent,
    CartButtonComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgbModule
  ]
})
export class UserModule { }
