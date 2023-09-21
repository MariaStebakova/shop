import { Component, OnInit } from "@angular/core";
import { Observable, switchMap, take, tap } from "rxjs";

import { CartItemModel, CartService } from "../..";
import { AppSettingsService, SortOptionModel } from "src/app/core";

@Component({
  selector: "app-cart-list",
  templateUrl: "./cart-list.component.html",
  styleUrls: ["./cart-list.component.css"]
})
export class CartListComponent implements OnInit {

  cartProducts$!: Observable<CartItemModel[]>;
  totalCost!: number;
  totalQuantity!: number;
  isEmptyCart: boolean = true;
  sortOptions!: {name: string; value: string}[];
  selectedSortOption!: {name: string; value: string};
  isAscSortOrder: boolean = false; 

  constructor(
    private cartService: CartService,
    private appSettingsService: AppSettingsService
  ) { }

  ngOnInit(): void {
    this.sortOptions = this.appSettingsService.sortOptions;
    this.cartProducts$ = this.refreshCartDetails();
    this.cartProducts$.pipe(take(1)).subscribe();
    this.appSettingsService.getSortOptions().pipe(
      tap((option: SortOptionModel) => {
        this.selectedSortOption = this.sortOptions.find(o => o.name === option.sortBy) ?? this.sortOptions[0];
        this.isAscSortOrder = option.sortOrder === 'asc';
      }),
      take(1)
    ).subscribe();
  }

  trackByProducts(index: number, item: CartItemModel): number | undefined {
    return item.id;
  }

  onEmptyCart(): void {
    this.cartProducts$ = this.cartService.removeAllProducts().pipe(
      switchMap(() => this.refreshCartDetails())
    );
  }

  onDeleteItem(item: CartItemModel): void {
    this.cartProducts$ = this.cartService.removeProduct(item).pipe(
      switchMap(() => this.refreshCartDetails())
    );
  }

  onQuantityIncrease(item: CartItemModel): void {
    this.cartProducts$ = this.cartService.increaseQuantity(item).pipe(
      switchMap(() => this.refreshCartDetails())
    );
  }

  onQuantityDecrease(item: CartItemModel): void {
    this.cartProducts$ = this.cartService.decreaseQuantity(item).pipe(
      switchMap(() => this.refreshCartDetails())
    );
  }

  onSortOptionChanged(): void {
    this.setSortOption();
  }

  onSortOrderChanged(): void {
    this.setSortOption();
  }

  private setSortOption(): void {
    this.appSettingsService.setSortOptions(new SortOptionModel(this.selectedSortOption.name, this.isAscSortOrder ? 'asc' : 'desc'));
  }

  private refreshCartDetails(): Observable<CartItemModel[]> {
    return this.cartService.getProducts().pipe(
      tap(items => {
        this.totalCost = this.cartService.totalCost(items);
        this.totalQuantity = this.cartService.totalQuantity(items);
        this.isEmptyCart = this.cartService.isEmptyCart(items);
      })
    );
  }
}
