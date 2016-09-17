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
    console.log('ParticipantsPage');
    this.session = navParams.data;
    
    this.participants = this.sessionData.getParticipants(this.session.name);
    console.log(this.participants);
    this.slides = [
      {
        username: 'Welcome to <b>ICA</b>',
        description: 'The <b>Ionic Conference App</b> is a practical preview of the Ionic Framework in action, and a demonstration of proper code use.',
        interests: 'img/ica-slidebox-img-1.png',
      },
      {
        username: 'Welcome to <b>ICA</b>',
        description: 'The <b>Ionic Conference App</b> is a practical preview of the Ionic Framework in action, and a demonstration of proper code use.',
        interests: 'img/ica-slidebox-img-1.png',
      }
    ];
  }
}
