import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [AdminRoutingModule.components],
  imports: [
    SharedModule,
    FormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
