import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';

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

  constructor() { }

  login(role: string): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => {
        this.isLoggedIn = val;
        this.isAdmin = role === "admin";
      })
    );
  }

  logout(): void {
    this.isLoggedIn = false;
    this.isAdmin = false;
  }

  checkLogin(url: string): boolean {
    this.redirectUrl = url;
    return this.isLoggedIn;
  }
}
