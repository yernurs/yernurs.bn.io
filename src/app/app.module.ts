
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectCoreComponent } from './project/project-core/project-core.component';
import { UserCoreComponent } from './user/user-core/user-core.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { AdminCoreComponent } from './admin/admin-core/admin-core.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import {CommonModule} from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterModule} from '@angular/router';
import {LayoutModule} from '@angular/cdk/layout';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
// import { AddTagsComponent } from './admin/add-tags/add-tags.component';
import {ReactiveFormsModule} from '@angular/forms';
// import { AllUsersComponent } from './admin/all-users/all-users.component';
import { UserProfileSettingsComponent } from './user/user-profile-settings/user-profile-settings.component';
import { GlobalNavComponent } from './shared/global-nav/global-nav.component';
import { UserTasksComponent } from './user/user-tasks/user-tasks.component';
import { UserProjectsComponent } from './user/user-projects/user-projects.component';
import { ProjectDirectoryComponent } from './project/project-directory/project-directory.component';
import { AllUsersComponent } from './admin/all-users/all-users.component';
import { AllProjectsComponent } from './admin/all-projects/all-projects.component';
import { LogsComponent } from './admin/logs/logs.component';
import { UserContactsComponent } from './user/user-contacts/user-contacts.component';
import { ToolComponent } from './shared/tool/tool.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MatTableModule} from '@angular/material/table';

const modules = [
  CommonModule,
  RouterModule,
  MatToolbarModule,
  MatIconModule,
  LayoutModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule,
  MatTableModule
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectCoreComponent,
    UserCoreComponent,
    HomePageComponent,
    AuthPageComponent,
    AdminCoreComponent,
    ErrorPageComponent,
    UserProfileComponent,
    // AddTagsComponent,
    // AllUsersComponent,
    UserProfileSettingsComponent,
    GlobalNavComponent,
    UserTasksComponent,
    UserProjectsComponent,
    ProjectDirectoryComponent,
    AllUsersComponent,
    AllProjectsComponent,
    LogsComponent,
    UserContactsComponent,
    ToolComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireAuthModule,
        ReactiveFormsModule,
        ...modules,
        FontAwesomeModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
