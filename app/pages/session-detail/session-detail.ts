import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { UserData } from '../../providers/user-data';


@Component({
  templateUrl: 'build/pages/session-detail/session-detail.html'
})
export class SessionDetailPage {
  session: any;
  showParticipate = false;

  constructor(
    public navParams: NavParams,
    public userData: UserData
  ) {
    this.session = navParams.data;
    
    this.userData.hasLoggedIn().then((hasLoggedIn) => {
      this.showParticipate = hasLoggedIn === 'true';
    });
  }
  
  addParticipant() {
    console.log('Clicked participate');
  }
}
