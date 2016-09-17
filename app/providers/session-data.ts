import { Injectable } from '@angular/core';

import { Events, LocalStorage, Storage } from 'ionic-angular';

@Injectable()
export class SessionData {
  _participants = [];
  storage = new Storage(LocalStorage);
  
  constructor(public events: Events) {}
  
  addParticipant(sessionName, userData) {
    this._participants.push(userData);
    this.storage.set(sessionName, this._participants);
  }
  
  removeParticipant(sessionName, userData) {
    let index = this._participants.indexOf(userData);
    if (index > -1) {
      this._participants.splice(index, 1);
    }
    this.storage.set(sessionName, this._participants);
  }
  
  getParticipants(sessionName){
    return this.storage.get(sessionName).then((value) => {
      return value;
    });
  }
}
