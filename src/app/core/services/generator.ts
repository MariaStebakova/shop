import { Injectable } from '@angular/core';

import { genID } from './gen-id.generator';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  private symbols = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ1234567890";
  constructor() { }

  generate(n: number): string {
    let result = '';
    for (let i = 0; i < n; i++) {
      result += this.symbols.charAt(Math.floor(Math.random() * this.symbols.length));
    }

    return result;
  }

  getNewID(): number | void {
    return genID().next().value;
  }
}
