import { Component, DestroyRef } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from '../core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  selectedRole!: {name: string, value: string};

  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

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

          this.router.navigate([redirect], navigationExtras);
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
