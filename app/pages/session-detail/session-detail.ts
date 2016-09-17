import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { UserData } from '../../providers/user-data';


@Component({
  templateUrl: 'build/pages/session-detail/session-detail.html'
})
export class SessionDetailPage {
  session: any;
  loggedIn = false;
  showParticipate = true;

  constructor(
    public navParams: NavParams,
    public userData: UserData
  ) {
    this.session = navParams.data;
    
    this.userData.hasLoggedIn().then((hasLoggedIn) => {
      this.loggedIn = hasLoggedIn === 'true';
      this.showParticipate = true;
    });
  }
  
  addParticipation() {
    console.log('Clicked participate');
    this.userData.addFavorite(this.session.name);
    this.showParticipate = false;
  }
  
  cancelParticipation() {
    console.log('Clicked on cancel');
    this.userData.removeFavorite(this.session.name);
    this.showParticipate = true;
  }
}
