import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {AuthService} from '../../services/auth.service';
import {Project} from '../../../environments/environment';

@Component({
  selector: 'app-user-projects',
  templateUrl: './user-projects.component.html',
  styleUrls: ['./user-projects.component.scss']
})
export class UserProjectsComponent implements OnInit {
  projects: Map<string, string>;
  constructor(private fire: FirebaseService,
              private auth: AuthService) { }

  ngOnInit(): void {
    this.fire.getUser(this.auth.uid).subscribe( user => {
      this.projects = user.currentP;
      console.log(this.projects);
    });
  }

}
