import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminCoreComponent} from '../admin-core/admin-core.component';

const routes: Routes = [
  {path: '', component: AdminCoreComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
