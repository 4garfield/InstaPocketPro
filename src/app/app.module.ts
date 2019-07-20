import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { MobxAngularModule } from 'mobx-angular';

import { AppComponent } from './app.component';
import { ShareModule } from './components/share.module';

import { AppRoutingModule } from './app.routing.module';
import { MaterialModule } from './material.module';
import { TodoModule } from './modules/todo/todo.module';
import { CatModule } from './modules/cat/cat.module';

import { MetaService } from './services/meta.service';
import { PlatformService } from './services/platform.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'instapocketpro-web-app'
    }),
    BrowserAnimationsModule,
    BrowserTransferStateModule,
    HttpClientModule,
    TransferHttpCacheModule,
    FlexLayoutModule,
    MaterialModule,
    MobxAngularModule,
    AppRoutingModule,
    ShareModule,
    TodoModule,
    CatModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    MetaService,
    PlatformService
  ],
  exports: [AppComponent]
})
export class AppModule { }
