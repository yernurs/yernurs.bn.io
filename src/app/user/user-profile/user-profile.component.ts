import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {Profile} from '../../../environments/environment';
import {FirebaseService} from '../../services/firebase.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  profile: Profile;
  contacts: string[];
  constructor(public auth: AuthService,
              public router: Router,
              private fire: FirebaseService
  ) {}

  ngOnInit(): void {
    this.fire.getUser(this.auth.uid).subscribe(prof => {
      if (prof){
        console.log(prof.contacts, 'contacts');
        this.profile = prof;
        this.contacts = prof.contacts;
      }
    });
  }
}
