import { Injectable } from '@angular/core';

import { Events } from 'ionic-angular';

@Injectable()
export class SessionData {
  _participants= [];

  constructor(public events: Events) {}

  addParticipant(sessionName, userData) {
    let participantData: string[] = ['username', 'description', 'interests'];
    let participantData2: string[] = ['username2', 'description2', 'interests2'];
    this._participants.push(participantData);
    this._participants.push(participantData2);
  }

  removeParticipant(sessionName, userData) {
    let index = this._participants.indexOf(userData);
    if (index > -1) {
      this._participants.splice(index, 1);
    }
  }

  getParticipants(sessionName) {
    return this._participants;
  }
}
