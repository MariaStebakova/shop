import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ProductsStoreModule } from './products/products-store.module';
import { EffectsModule } from '@ngrx/effects';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { routerReducers } from './router';
import { CustomSerializer } from './router/router.custom-serializer';
import { RouterEffects } from './router/router.effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsStoreModule,
    StoreModule.forRoot(routerReducers, {
      // All checks will automatically be disabled in production builds
      runtimeChecks: {
        strictStateImmutability: true,      // default value is true
        strictActionImmutability: true,     // default value is true
        strictStateSerializability: true,   // default value is false
        strictActionSerializability: false,  // default value is false
        strictActionWithinNgZone: true,     // default value is false
        strictActionTypeUniqueness: true    // default value is false
      }
    }),
    // Instrumentation must be imported after importing StoreModule (config is optional) 
    StoreDevtoolsModule.instrument({
      maxAge: 25,       // Retains last 25 states
      autoPause: true,   // Pauses recording actions and state changes when the extension window is not open
    }),

    EffectsModule.forRoot([RouterEffects]),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      routerState: RouterState.Minimal,
      serializer: CustomSerializer
    }),

  ]
})
export class RootStoreModule { }
