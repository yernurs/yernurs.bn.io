import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserCoreComponent} from '../user-core/user-core.component';
import {UserProfileComponent} from '../user-profile/user-profile.component';

const routes: Routes = [
  {path: '', component: UserCoreComponent, children: [
      {path: '', redirectTo: '/user/profile', pathMatch: 'full'},
      {path: 'profile', component: UserProfileComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
