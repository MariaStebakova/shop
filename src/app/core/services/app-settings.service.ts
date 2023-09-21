import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, catchError, of, retry, share, tap } from 'rxjs';

import { LocalStorageService } from './local-storage.service';

export class SortOptionModel {
  constructor(
    public sortBy: string,
    public sortOrder: string
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  sortOptions = [
    {
      name: "None",
      value: ""
    },
    {
      name: "Name",
      value: "product.name"
    },
    {
      name: "Price",
      value: "product.price"
    },
    {
      name: "Quantity",
      value: "quantity"
    }
  ]

  private appSettingsUrl = '/assets/app-settings.json';

  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService
  ) { }

  getSortOptions(): Observable<SortOptionModel> {
    const option = this.localStorageService.getItem('sortOption');
    if (option) {
      return of(option);
    }

    return this.httpClient.get<SortOptionModel>(this.appSettingsUrl).pipe(
      retry(3),
      share(),
      tap(option => {
        this.localStorageService.setItem('sortOption', option);
      }),
      catchError(err => {
        console.error(err);
        return of(new SortOptionModel(this.sortOptions[0].name, 'desc'));
      })
    );
  }

  setSortOptions(option: SortOptionModel): void {
    this.localStorageService.setItem('sortOption', option);
  }
}
