import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { CartModule } from './cart-list/cart.module';
import { ProductsModule } from './product-list/products.module';
import { SharedModule } from './shared/shared.module';
import { APPINFO } from './core/services/constants.service';
import { GeneratorFactory, GeneratorToken5 } from './core/services/generator.factory';
import { GeneratorService } from './core/services/generator.service';
import { OrdersModule } from './orders/orders.module';
import { LoginComponent } from './login/login.component';
import { AdminModule } from './admin/admin.module';
import { httpInterceptorProviders } from './core/interceptors';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    
    CartModule,
    ProductsModule,
    SharedModule,
    OrdersModule,
    AdminModule,

    AppRoutingModule
  ],
  providers: [
    { provide: APPINFO, useValue: { App: "Shop", Ver: "1.0", APP_URL: "https://localhost:4200/"} },
    { provide: GeneratorToken5, useFactory: GeneratorFactory(5), deps: [GeneratorService] },
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
