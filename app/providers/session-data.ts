import { Injectable } from '@angular/core';

import { Events } from 'ionic-angular';

@Injectable()
export class SessionData {
  sessionName: string;
  _participants= [];

  constructor(public events: Events) {
    // Add random participants for testing
    this.addParticipant('session', ['Liza', 'random description', 'ionic, angular']);
    this.addParticipant('session', ['Victor', 'random description bis', 'java, js, html']);
  }

  addParticipant(sessionName, participantData) {
    this.sessionName = sessionName;
    this._participants.push(participantData);
  }

  removeParticipant(sessionName, username) {
    let index;
    for (let participant in this._participants) {
      if (participant[0] === username) {
        index = this._participants.indexOf(participant);
      }
    }

    if (index > -1) {
      this._participants.splice(index, 1);
    }
  }

  getParticipants(sessionName) {
    return this._participants;
  }
}
