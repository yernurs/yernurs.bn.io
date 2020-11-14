import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FirebaseService} from '../../services/firebase.service';
import {Project} from '../../../environments/environment';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  project: Project;
  constructor(private route: ActivatedRoute,
              private fire: FirebaseService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params.id, 'AYAYA');
      this.fire.getProject(params.id).subscribe(project => {
        this.project = project;
      });
    });
  }

}
