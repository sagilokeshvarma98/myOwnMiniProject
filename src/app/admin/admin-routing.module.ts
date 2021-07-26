import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from '../user/user-profile/user-profile.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';

const routes: Routes = [{path:"admin",component:AdminProfileComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
