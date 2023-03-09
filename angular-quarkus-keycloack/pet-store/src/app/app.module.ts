import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreNavComponent } from './store-nav/store-nav.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {initializer} from "./initializer.service";

@NgModule({
  declarations: [
    AppComponent,
    StoreNavComponent,
    AdminNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      deps: [KeycloakService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
