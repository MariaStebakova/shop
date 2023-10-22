import { Component } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { Store } from '@ngrx/store';

import { AuthService } from '../core';
import * as RouterActions from '../core/@ngrx/router/router.actions';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  selectedRole!: {name: string, value: string};

  constructor(
    public authService: AuthService,
    private store: Store
  ) {
    this.selectedRole = this.authService.roles[1];
  }

  onLogin(): void {
    const observer = {
      next: () => {
        if (this.authService.isLoggedIn) {
          const redirect = this.authService.redirectUrl
            ? this.authService.redirectUrl
            : '/admin';
          const navigationExtras: NavigationExtras = {
            queryParamsHandling: 'preserve',
            preserveFragment: true
          };

          this.store.dispatch(RouterActions.go({ path: [redirect], extras: navigationExtras }));
        }
      }
    };
    this.authService
      .login(this.selectedRole.value)
      .subscribe(observer);
  }

  onLogout(): void {
    this.authService.logout();
  }

}
