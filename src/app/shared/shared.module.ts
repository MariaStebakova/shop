import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightDirective } from './directives/highlight.directive';
import { BorderDirective } from './directives/border.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HighlightDirective,
    BorderDirective,
    OrderByPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    HighlightDirective,
    BorderDirective,
    OrderByPipe,
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class SharedModule { }
