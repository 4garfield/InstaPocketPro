import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'ng-pwa-app'
    }),
    FlexLayoutModule,
    BrowserTransferStateModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  exports: [AppComponent]
})
export class AppModule { }
