import { Component } from '@angular/core';
import { AuthenticationService } from './authentication/authentication.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'user-app';
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  get isLoggedIn() {
    return this.authenticationService.isLoggedIn();
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }
}
