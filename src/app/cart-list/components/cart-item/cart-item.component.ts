import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { CartItemModel } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: [ "./cart-item.component.css" ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent {

  @Input() cartItem!: CartItemModel;
  @Output() deleteItem: EventEmitter<CartItemModel> = new EventEmitter();
  @Output() increaseQuantity: EventEmitter<CartItemModel> = new EventEmitter();
  @Output() decreaseQuantity: EventEmitter<CartItemModel> = new EventEmitter();

  onQuantityDecrease(): void {
    this.decreaseQuantity.emit(this.cartItem);
  }

  onQuantityIncrease(): void {
    this.increaseQuantity.emit(this.cartItem);
  }

  onDeleteItem(): void {
    this.deleteItem.emit(this.cartItem);
  }
}
