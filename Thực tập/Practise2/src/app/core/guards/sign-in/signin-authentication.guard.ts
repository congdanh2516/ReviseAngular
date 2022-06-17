import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SignInComponent } from 'src/app/shared/sign-in/sign-in.component';
import { SignInService } from '../../services/sign-in/sign-in.service';

@Injectable({
  providedIn: 'root'
})
export class SigninAuthenticationGuard implements CanActivate {

  constructor(private signIn : SignInService, private router : Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.signIn.loggedIn()) {
      return true;
    }
    else {
      this.router.navigateByUrl('/home');
      return false;
    }
  }
  
}
