import { Injectable } from '@angular/core';

import { Events, LocalStorage, Storage } from 'ionic-angular';


@Injectable()
export class UserData {
  _favorites = [];
  HAS_LOGGED_IN = 'hasLoggedIn';
  storage = new Storage(LocalStorage);

  constructor(public events: Events) {}

  hasFavorite(sessionName) {
    return (this._favorites.indexOf(sessionName) > -1);
  }

  addFavorite(sessionName) {
    this._favorites.push(sessionName);
  }

  removeFavorite(sessionName) {
    let index = this._favorites.indexOf(sessionName);
    if (index > -1) {
      this._favorites.splice(index, 1);
    }
  }

  login(username) {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.setUsername(username);
    this.events.publish('user:login');
  }

  signup(username, firstname, lastname, description, interests) {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.setUsername(username);
    this.setFirstname(firstname);
    this.setLastname(lastname);
    this.setDescription(description);
    this.setInterests(interests);
    this.events.publish('user:signup');
  }

  logout() {
    this.storage.remove(this.HAS_LOGGED_IN);
    this.storage.remove('username');
    this.events.publish('user:logout');
  }

  setUsername(username) {
    this.storage.set('username', username);
  }

  setFirstname(firstname) {
    this.storage.set('firstname', firstname);
  }

  setLastname(lastname) {
    this.storage.set('lastname', lastname);
  }

  setDescription(description) {
    this.storage.set('userdescription', description);
  }

  setInterests(interests) {
    this.storage.set('userinterests', interests);
  }

  getUsername() {
    return this.storage.get('username').then((value) => {
      return value;
    });
  }

  getFirstname() {
    return this.storage.get('firstname').then((value) => {
      return value;
    });
  }

  getLastname() {
    return this.storage.get('lastname').then((value) => {
      return value;
    });
  }

  getDescription() {
    return this.storage.get('userdescription').then((value) => {
      return value;
    });
  }

  getInterests() {
    return this.storage.get('userinterests').then((value) => {
      return value;
    });
  }

  // return a promise
  hasLoggedIn() {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value;
    });
  }
}
