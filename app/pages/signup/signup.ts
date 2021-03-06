import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { UserData } from '../../providers/user-data';


@Component({
  templateUrl: 'build/pages/signup/signup.html'
})
export class SignupPage {
  signup: {username?: string, password?: string, firstname?: string, lastname?: string, description?: string, interests?: string} = {};
  submitted = false;

  constructor(public navCtrl: NavController, public userData: UserData) {}

  onSignup(form) {
    this.submitted = true;

    if (form.valid) {
      this.userData.signup(this.signup.username, this.signup.firstname, this.signup.lastname, this.signup.description, this.signup.interests);
      this.navCtrl.push(TabsPage);
    }
  }
}
