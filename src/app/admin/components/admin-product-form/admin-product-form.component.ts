import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { selectSelectedProductByUrl } from 'src/app/core/@ngrx';

import { Category, ProductModel } from 'src/app/shared';
import * as ProductsActions from '../../../core/@ngrx/products/products.actions';
import * as RouterActions from '../../../core/@ngrx/router/router.actions';
import { AutoUnsubscribe } from 'src/app/core/decorators';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
@AutoUnsubscribe()
export class AdminProductFormComponent implements OnInit {

  @Input() productID!: string;
  
  product!: ProductModel;
  categories = Object.values(Category);
  private sub!: Subscription;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.product = new ProductModel();

    this.sub = this.store.select(selectSelectedProductByUrl)
      .subscribe((product: ProductModel) => {
        this.product = {...product};
      });
  }

  onSaveProduct(): void {
    const product = { ...this.product } as ProductModel;

    if (product.id) {
      this.store.dispatch(ProductsActions.updateProduct({ product }));
    } else {
      this.store.dispatch(ProductsActions.createProduct({ product }));
    }
  }

  onGoBack(): void {
    this.store.dispatch(RouterActions.back());
  }
}
