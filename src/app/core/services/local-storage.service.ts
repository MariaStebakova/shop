import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  setItem(key: string, value: any): void {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): any {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : item;
  }

  removeItem(key: string): void {
    window.localStorage.removeItem(key);
  }

  clear(): void {
    window.localStorage.clear();
  }
}
