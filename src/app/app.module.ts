// angular
import {  NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {  HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// libs
import { CookieService, CookieModule } from '@gorniv/ngx-universal';
import { TransferHttpCacheModule } from '@nguniversal/common';
// shared

// components
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { MetaModule } from '@ngx-meta/core';


@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    TransferHttpCacheModule,
    HttpClientModule,
    RouterModule,
    AppRoutes,
    HomeModule,
    MetaModule,
    BrowserAnimationsModule,
    CookieModule.forRoot(),
  ],
  declarations: [AppComponent],
  providers: [
    CookieService,
  ],
})
export class AppModule {
}
