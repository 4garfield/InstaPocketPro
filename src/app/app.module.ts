import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MobxAngularModule } from 'mobx-angular';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

import { AppRoutingModule } from './app.routing.module';
import { MaterialModule } from './material.module';
import { TodoModule } from './modules/todo/todo.module';
import { CatModule } from './modules/cat/cat.module';

import { MetaService } from './services/meta.service';
import { PlatformService } from './services/platform.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
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
