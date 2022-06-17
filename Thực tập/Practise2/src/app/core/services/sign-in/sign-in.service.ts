import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';


const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  isAuthorize : boolean;

  constructor(private router : Router) {
    console.log("THis is sign in service")
   }

  signIn (account : any) : Boolean {
    if (account.userName == "ccd" && account.password == "12345") {
      this.isAuthorize = true;
      localStorage.setItem('id_token', JSON.stringify(true));
      return true;
    }
    return false;
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  loggedIn(){
    return this.getToken();
    // return !helper.isTokenExpired(token);
  }

  logOut () {
      this.isAuthorize=false;
      localStorage.removeItem('id_token');
      //location.reload();
      this.router.navigateByUrl('/home');
  }
}
