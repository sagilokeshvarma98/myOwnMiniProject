import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProtectRoutesGuard } from '../Guards/protect-routes.guard';
import { ProductsDisplayComponent } from './products-display/products-display.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [{path:"user",component:ProductsDisplayComponent,canActivate:[ProtectRoutesGuard]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
