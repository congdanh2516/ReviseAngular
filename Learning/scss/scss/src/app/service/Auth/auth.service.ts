import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuthorize : boolean;

  constructor() { }

  public login () {
    this.isAuthorize = true;
  }

  public logout () {
    this.isAuthorize = false;
  }
}
