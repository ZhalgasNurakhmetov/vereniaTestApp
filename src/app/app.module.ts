import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderModule} from './layouts/header/header.module';
import {FAVORITES_PASSWORD_PROVIDER} from './providers/favorites.password';
import {StoreModule} from './store/store.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    StoreModule,
  ],
  providers: [
    FAVORITES_PASSWORD_PROVIDER,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
