import { Component } from '@angular/core';

import { AlertController, NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { UserData } from '../../providers/user-data';


@Component({
  templateUrl: 'build/pages/account/account.html',
})
export class AccountPage {
  username: string;
  firstname: string;
  lastname: string;
  description: string;
  interests: string;
  
  constructor(public alertCtrl: AlertController, public nav: NavController, public userData: UserData) {
  }

  ngAfterViewInit() {
    this.getUsername();
	this.getFirstname();
	this.getLastName();
	this.getDescription();
	this.getInterests();
  }

  updatePicture() {
    console.log('Clicked to update picture');
  }

  // Present an alert with the current username populated
  // clicking OK will update the username and display it
  // clicking Cancel will close the alert and do nothing
  changeUsername() {
    let alert = this.alertCtrl.create({
      title: 'Change Username',
      buttons: [
        'Cancel'
      ]
    });
    alert.addInput({
      name: 'username',
      value: this.username,
      placeholder: 'username'
    });
    alert.addButton({
      text: 'Ok',
      handler: data => {
        this.userData.setUsername(data.username);
        this.getUsername();
      }
    });

    alert.present();
  }

  changePassword() {
    console.log('Clicked to change password');
  }
  
  changeDescription() {
	let alert = this.alertCtrl.create({
      title: 'Change Description',
      buttons: [
        'Cancel'
      ]
    });
    alert.addInput({
      name: 'description',
      value: this.description,
      placeholder: 'description'
    });
    alert.addButton({
      text: 'Ok',
      handler: data => {
        this.userData.setDescription(data.description);
        this.getDescription();
      }
    });

    alert.present();
  }
  
  changeInterests() {
	let alert = this.alertCtrl.create({
      title: 'Change Interests',
      buttons: [
        'Cancel'
      ]
    });
    alert.addInput({
      name: 'interests',
      value: this.interests,
      placeholder: 'interests'
    });
    alert.addButton({
      text: 'Ok',
      handler: data => {
        this.userData.setInterests(data.interests);
        this.getInterests();
      }
    });

    alert.present();
  }
  
  getUsername() {
    this.userData.getUsername().then((username) => {
      this.username = username;
    });
  }
  
  getFirstname() {
	this.userData.getFirstname().then((firstname) => {
      this.firstname = firstname;
    });
  }
  
  getLastName() {
	this.userData.getLastname().then((lastname) => {
      this.lastname = lastname;
    });
  }
  
  getDescription() {
	this.userData.getDescription().then((description) => {
      this.description = description;
    });
  }
  
  getInterests() {
	this.userData.getInterests().then((interests) => {
      this.interests = interests;
    });
  }

  logout() {
    this.userData.logout();
    this.nav.setRoot(LoginPage);
  }
}
