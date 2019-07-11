import { NgModule } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';

import { SwUpdateMockService } from './services/sw-update.mock.service';
import { SwPushMockService } from './services/sw-push.mock.service';

@NgModule({
  providers: [
    { provide: SwUpdate, useClass: SwUpdateMockService },
    { provide: SwPush, useClass: SwPushMockService }
  ]
})
export class ServiceWorkerMockModule { }
