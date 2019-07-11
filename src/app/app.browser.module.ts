import { NgModule } from '@angular/core';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    AppModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
  ]
})
export class AppBrowserModule { }
