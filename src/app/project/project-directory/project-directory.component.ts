import { Component, OnInit } from '@angular/core';
import {Project} from '../../../environments/environment';
import {FirebaseService} from '../../services/firebase.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-project-directory',
  templateUrl: './project-directory.component.html',
  styleUrls: ['./project-directory.component.scss']
})
export class ProjectDirectoryComponent implements OnInit {
  currentP: Project[] = [];
  pastP: Project[] = [];
  constructor(private fire: FirebaseService,
              private auth: AuthService) { }

  ngOnInit(): void {
    this.fire.getCurrentProjects(this.auth.uid);
    this.fire.getPastProjects(this.auth.uid);
    this.fire.getProject('JfX9jqLzKHvA7AkwqdrW').subscribe(p => {
      const project: Project = {
        projId: p.projId,
        projName: p.projName ,
        projDescription: p.projDescription ,
        projCreatorId: p.projCreatorId ,
        projStartDate: p.projStartDate ,
        projEndDate: p.projEndDate ,
        projParticipants: p.projParticipants
      };
      this.currentP.push(project);
    });
    console.log(this.fire.current, 'WTFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');
  }

}
