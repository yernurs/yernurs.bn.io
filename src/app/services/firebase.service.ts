import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireStorage} from '@angular/fire/storage';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {Profile, Task} from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  current: string[];
  past: string[];
  constructor(private auth: AuthService,
              private afs: AngularFirestore,
              private storage: AngularFireStorage) {
  }
  getUser(uid): Observable<any>{
    // Observable<Profile>
    return this.afs.collection('profiles').doc(`${uid}`).valueChanges();
  }
  getProject(pid): Observable<any>{
    return this.afs.collection('projects').doc(`${pid}`).valueChanges();
  }
  getPersonalSchedule(uid): Observable<any>{
    return this.afs.collection('profiles').doc(`${uid}`).collection('personalSchedule')
      .snapshotChanges();
  }
  getCurrentProjects(uid): void{
    let projectsMap: Map<string, string> = new Map();
    this.getUser(uid).subscribe( user => {
      projectsMap = user.currentP as Map<string, string>;
      this.current = Object.keys(projectsMap);
      console.log(this.current);
      console.log(Object.keys(projectsMap), 'firebase map current');
    });
  }
  getPastProjects(uid): void{
    let projectsMap: Map<string, string> = new Map();
    this.getUser(uid).subscribe( user => {
      projectsMap = user.pastP as  Map<string, string>;
      this.past = Object.keys(projectsMap);
      console.log(this.past);
      console.log(Object.keys(projectsMap), 'firebase map past');
    });
  }
}
