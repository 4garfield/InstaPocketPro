import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MobxAngularModule } from 'mobx-angular';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';

import { AppRoutingModule } from './app.routing.module';
import { MaterialModule } from './material.module';

import { MetaService } from './services/meta.service';
import { PlatformService } from './services/platform.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'instapocketpro-web-app'
    }),
    BrowserAnimationsModule,
    BrowserTransferStateModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule,
    MobxAngularModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    MetaService,
    PlatformService
  ],
  exports: [AppComponent]
})
export class AppModule { }
