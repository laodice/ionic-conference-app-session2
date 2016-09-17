import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

import { ParticipantsPage } from '../participants/participants';
import { UserData } from '../../providers/user-data';
import { SessionData } from '../../providers/session-data';


@Component({
  templateUrl: 'build/pages/session-detail/session-detail.html'
})
export class SessionDetailPage {
  session: any;
  loggedIn = false;
  isFavourite = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userData: UserData,
    public sessionData: SessionData
  ) {
    this.session = navParams.data;

    this.userData.hasLoggedIn().then((hasLoggedIn) => {
      this.loggedIn = hasLoggedIn === 'true';
      this.isFavourite = this.userData.hasFavorite(this.session.name);
    });
  }

  addParticipation() {
    this.userData.addFavorite(this.session.name);
    this.sessionData.addParticipant(
      this.session.name,
      this.userData);
    this.isFavourite = true;
  }

  cancelParticipation() {
    this.userData.removeFavorite(this.session.name);
    this.sessionData.removeParticipant(this.session.name, this.userData);
    this.isFavourite = false;
  }

  seeOtherParticipants() {
    this.navCtrl.push(ParticipantsPage, {
      session: this.session
    });
  }
}
