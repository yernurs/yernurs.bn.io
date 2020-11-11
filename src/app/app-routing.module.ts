import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {AuthPageComponent} from './auth-page/auth-page.component';
import {AuthGuard} from './services/auth.guard';
import {ErrorPageComponent} from './shared/error-page/error-page.component';

const routes: Routes = [
  {path: '', children: [
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'home', component: HomePageComponent},
      {path: 'auth', component: AuthPageComponent}
    ]},
  {path: 'user', loadChildren: () => import('./user/user/user.module').then(mod => mod.UserModule),
    canActivate: [AuthGuard]},
  {path: 'project', loadChildren: () => import('./project/project/project.module').then(mod => mod.ProjectModule),
    canActivate: [AuthGuard]},
  {path: 'admin', loadChildren: () => import('./admin/admin/admin.module').then(mod => mod.AdminModule)},
  {path: 'error', component: ErrorPageComponent},
  {path: '**', redirectTo: '/error'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
