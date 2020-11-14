import { Component, OnInit } from '@angular/core';

import {FirebaseService} from '../../services/firebase.service';
import {Task} from '../../../environments/environment';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-user-tasks',
  templateUrl: './user-tasks.component.html',
  styleUrls: ['./user-tasks.component.scss']
})
export class UserTasksComponent implements OnInit {
  tasks: Array<any> = [];
  displayedColumns: string[] = ['tskId', 'done', 'pid', 'tskDeadline', 'tskDescription', 'tskName'];
  constructor(private fire: FirebaseService,
              private auth: AuthService) { }

  ngOnInit(): void {
    this.fire.getPersonalSchedule(this.auth.uid).forEach(doc => {
      // tasks.push(doc.data());
      console.log(doc, 'TASK wtf');
      // this.tasks = Object.keys(doc).map(
      //   (key: Task): Task => this.tasks[key]
      // );
      doc.forEach(task => {
        const t0 = task.payload.doc.data();
        console.log(t0 as Task, 't0');
        // const temp = Object.keys(task.payload.doc.data()).map(
        //   (key: string): string => this.tasks[key]
        // );
        // const t: Task = {
        //   done: t0.done,
        //   pid: t0.pid,
        //   tskName: t0.tskName,
        //   tskId: t0.tskId,
        //   tskDescription: t0.tskDescription,
        //   tskDeadline: t0.tskDeadline,
        //   uid: t0.uid
        // };
        this.tasks.push(t0);
      });
    });
    console.log(this.tasks, 'THIS IS TASK');
  }

}
