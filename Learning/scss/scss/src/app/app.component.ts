import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/Auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'scss';

  constructor(private auth : AuthService, private router : Router) {}

  login () {
    this.auth.login();
    alert('Login successfully');
  }

  logout () {
    this.auth.logout();
    // alert("Logged out");
    this.router.navigate(['/']);
  }
}

