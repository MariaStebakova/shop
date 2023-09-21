import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/shared';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent {

  @Input() product!: ProductModel;
  @Output() editProduct = new EventEmitter<ProductModel>();
  @Output() deleteProduct = new EventEmitter<ProductModel>();

  onEdit(): void {
    this.editProduct.emit(this.product);
  }

  onDelete(): void {
    this.deleteProduct.emit(this.product);
  }

}
