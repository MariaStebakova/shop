import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, tap } from 'rxjs';
import { Store } from '@ngrx/store';

import { ProductModel } from 'src/app/shared';
import { CartService } from 'src/app/cart-list';
import { selectSelectedProductByUrl } from 'src/app/core/@ngrx';
import * as RouterActions from '../../../core/@ngrx/router/router.actions';
import { AutoUnsubscribe } from 'src/app/core/decorators';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
@AutoUnsubscribe()
export class ProductViewComponent implements OnInit {

  @Input() productID!: string;
  product!: ProductModel;
  private sub!: Subscription;

  constructor(
    private cartService: CartService,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.product = new ProductModel();

    this.sub = this.store.select(selectSelectedProductByUrl)
      .subscribe((product: ProductModel) => {
        this.product = { ...product };
      });
  }

  onAddToCart() {
    this.sub.add(this.cartService.addProduct(this.product).pipe(
      tap(() => this.onGoBack())
    ).subscribe())
  }

  onGoBack(): void {
    this.store.dispatch(RouterActions.goHome());
  }
}
