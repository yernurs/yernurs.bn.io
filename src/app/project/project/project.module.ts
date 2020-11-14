import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [ProjectComponent],
    imports: [
        CommonModule,
        ProjectRoutingModule,
        MatCardModule
    ]
})
export class ProjectModule { }
