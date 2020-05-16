import { BackendModule } from './backend/backend.module';
import { httpInterceptorProviders } from './interceptors/index';
import { DaftarModule } from './pages/daftar/daftar.module';
import { MasukModule } from './pages/masuk/masuk.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MasukModule,
    DaftarModule,
    BackendModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
