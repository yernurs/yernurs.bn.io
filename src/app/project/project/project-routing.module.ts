import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectDirectoryComponent} from '../project-directory/project-directory.component';
import {ProjectCoreComponent} from '../project-core/project-core.component';
import {ProjectComponent} from './project.component';

const routes: Routes = [
  {path: '', component: ProjectCoreComponent, children: [
      {path: '', redirectTo: '/project/directory', pathMatch: 'full'},
      {path: 'directory', component: ProjectDirectoryComponent},
      {path: 'directory/:id', component: ProjectComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }

