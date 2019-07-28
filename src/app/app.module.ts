import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { MobxAngularModule } from 'mobx-angular';
import { PrebootModule } from 'preboot';

import { AppComponent } from './app.component';
import { ShareModule } from './components/share.module';

import { AppRoutingModule } from './app.routing.module';
import { MaterialModule } from './material.module';
import { MobxModule } from './mobx/mobx.module';
import { TodoModule } from './modules/todo/todo.module';

import { MetaService } from './services/meta.service';
import { PlatformService } from './services/platform.service';
import { GtagService } from './services/gtag.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'instapocketpro-web-app'
    }),
    PrebootModule.withConfig({ appRoot: 'app-root' }),
    BrowserAnimationsModule,
    BrowserTransferStateModule,
    HttpClientModule,
    TransferHttpCacheModule,
    FlexLayoutModule,
    MaterialModule,
    MobxAngularModule,
    AppRoutingModule,
    ShareModule,
    MobxModule,
    TodoModule,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    MetaService,
    PlatformService,
    GtagService,
  ],
  exports: [AppComponent]
})
export class AppModule { }
