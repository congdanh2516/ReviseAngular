import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignInService } from 'src/app/core/services/sign-in/sign-in.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public signIn_sv : SignInService, private router : Router) { }

  ngOnInit(): void {
  }

  logOut() {
    this.signIn_sv.logOut();
  }

  backHome () {
    this.router.navigateByUrl('/home');
  }

  toAdmin () {
    this.router.navigateByUrl('/user-list')
  }
}
