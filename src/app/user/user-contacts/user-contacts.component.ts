import {Component, Input, OnInit} from '@angular/core';
import {Profile} from '../../../environments/environment';
import {AngularFireStorage} from '@angular/fire/storage';
import {FirebaseService} from '../../services/firebase.service';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-user-contacts',
  templateUrl: './user-contacts.component.html',
  styleUrls: ['./user-contacts.component.scss']
})
export class UserContactsComponent implements OnInit {
  @Input() contact: string;
  profile: Profile;
  constructor(
    private fire: FirebaseService,
    private afs: AngularFirestore
  ){
  }

  ngOnInit(): void {
    // this.fire.getUser(this.user).subscribe(u => {
    //   u.contacts.forEach(contact => {
    //     this.fire.getUser(contact ).subscribe( c => {
    //       this.profiles.push(c);
    //     });
    //   });
    // });
    // const user = this.afs.collection('profiles').doc(`${this.user}`).get();
    console.log(this.contact);
    this.fire.getUser(this.contact).subscribe(profile => {
      this.profile = profile;
    });
  }

}
