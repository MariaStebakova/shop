import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  roles = [
    {
      name: "User",
      value: "user"
    },
    {
      name: "Admin",
      value: "admin"
    }
  ];
  isAdmin: boolean = false;
  isLoggedIn: boolean = false;
  redirectUrl: string = '';

  constructor(private localStorageService: LocalStorageService) { }

  login(role: string): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => {
        this.isLoggedIn = val;
        this.isAdmin = role === "admin";
        this.persistLogin();
      })
    );
  }

  logout(): void {
    this.isLoggedIn = false;
    this.isAdmin = false;
    this.persistLogin();
  }

  checkLogin(url: string): boolean {
    this.redirectUrl = url;
    this.isLoggedIn = this.localStorageService.getItem('isLoggedIn') ?? false;
    this.isAdmin = this.localStorageService.getItem('isAdmin') ?? false;
    return this.isLoggedIn;
  }

  private persistLogin(): void {
    this.localStorageService.setItem('isLoggedIn', this.isLoggedIn);
    this.localStorageService.setItem('isAdmin', this.isAdmin);
  }
}
