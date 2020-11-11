import {Injectable, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Router} from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import {Profile} from '../../environments/environment';
import firebase from 'firebase';
import auth = firebase.auth;


@Injectable({
  providedIn: 'root'
})
export class AuthService{
  user$: Observable<Profile>;
  role: string;
  uid: string;
  data: Profile;
  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        // Logged in
        if (user) {
          this.uid = user.uid;
          return this.afs.doc<Profile>(`profiles/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
    );
  }
  asBusiness(): void{
    this.role = 'business';
  }
  asEmployee(): void{
    this.role = 'employee';
  }
  async googleSignin(): Promise<void> {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    this.afs.collection(`profiles`).snapshotChanges().subscribe(profiles => {
      let newUser = true;
      profiles.forEach(p => {
        const profile: any = p.payload.doc.data();
        if (profile.uid === credential.user.uid){
          newUser = false;
        }
      });
      if (newUser){
        const profile: Profile = {
          uid: credential.user.uid,
          displayName: credential.user.displayName,
          photoURL: credential.user.photoURL,
          email: credential.user.email,
          role: this.role,
        };
        this.afs.collection(`profiles`).doc(credential.user.uid).set(profile, {merge: true});
        console.log('new user... profile was created ');
      } else {
        console.log('revisiting user');
      }
    });
    this.router.navigate(['/user']);
  }
  //
  // private updateUserData(user): Promise<void> {
  //   // Sets user data to firestore on login
  //   const userRef: AngularFirestoreDocument<User> = this.afs.doc(`profiles/${user.uid}`);
  //   if (this.role){
  //     this.data = {
  //       uid: user.uid,
  //       email: user.email,
  //       displayName: user.displayName,
  //       photoURL: user.photoURL,
  //       role: this.role
  //     };
  //   } else {
  //     this.data = {
  //       uid: user.uid,
  //       email: user.email,
  //       displayName: user.displayName,
  //       photoURL: user.photoURL
  //     };
  //   }
  //   this.router.navigate(['/user']);
  //   return userRef.set(this.data, { merge: true });
  //
  // }
  async signOut(): Promise<void> {
    await this.afAuth.signOut();
    this.router.navigate(['/']);
  }
}
