import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireStorage} from '@angular/fire/storage';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {Profile} from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  profile: Profile;
  constructor(private auth: AuthService,
              private afs: AngularFirestore,
              private storage: AngularFireStorage) {
  }
  getUser(uid): Observable<any>{
    // Observable<Profile>
    return this.afs.collection('profiles').doc(`${uid}`).valueChanges();
  }
  getProject(pid): any{
    return this.afs.collection('projects').doc(`${pid}`).valueChanges();
  }
}
