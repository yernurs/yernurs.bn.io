import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {
  signUpRole: string;
  login = false;
  signup = false;
  constructor(public auth: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onBusiness(): void{
    this.signUpRole = 'business';
  }
  onEmployee(): void{
    this.signUpRole = 'employee';
  }

  signIn(): void{
    this.auth.role = this.signUpRole;
    this.auth.googleSignin();
  }
}
