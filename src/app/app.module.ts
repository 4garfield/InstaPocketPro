import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MobxAngularModule } from 'mobx-angular';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './app.routing.module';
import { MaterialModule } from './material.module';
import { ListModule } from './modules/list/list.module';
import { TodoModule } from './modules/todo/todo.module';
import { CatModule } from './modules/cat/cat.module';

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
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule,
    MobxAngularModule,
    AppRoutingModule,
    ListModule,
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
