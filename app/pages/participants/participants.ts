import { Component } from '@angular/core';

import { MenuController, NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

import { SessionData } from '../../providers/session-data';
import { UserData } from '../../providers/user-data';

interface Slide {
  username: string;
  description: string;
  interests: string;
}

@Component({
  templateUrl: 'build/pages/participants/participants.html'
})
export class ParticipantsPage {
  slides: Slide[];
  session: any;
  participants: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menu: MenuController,
    public sessionData: SessionData,
    public userData: UserData
  ) {
    this.session = navParams.get('session');
    this.participants = this.sessionData.getParticipants(this.session.name);

    let index = 0;
    this.slides = [];
    while (index < this.participants.length) {
      this.slides.push(
        {
        username: this.participants[index][0],
        description: this.participants[index][1],
        interests: this.participants[index][2],
      });

      index++;
    }
  }

  likeUser(event) {
    console.log('Clicked to connect to user ');
  }
}
