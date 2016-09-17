import { Component } from '@angular/core';

import { MenuController, NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

import { SessionData } from '../../providers/session-data';

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
    public sessionData: SessionData
  ) {
    this.session = navParams.get('session');
    this.participants = this.sessionData.getParticipants(this.session.name);
    let index = 0;

    this.slides = [];
    do {
      this.slides.push(
        {
        username: 'hello',
        description: 'The <b>Ionic Conference App</b> is a practical preview of the Ionic Framework in action, and a demonstration of proper code use.',
        interests: 'img/ica-slidebox-img-1.png',
      });

      index++;
    } while (index < this.participants.length);
  }

  getUsername(userData) {
    return userData.getUsername().then((username) => {
      return username;
    });
  }
 }
