import { Injectable } from '@angular/core';

import { PlatformService } from './platform.service';

@Injectable()
export class GtagService {

  constructor(private platformService: PlatformService) { }

  push(name: string, action: string, data: any) {
    if (this.platformService.isBrowser()) {
      (<any>window).gtag(name, action, data);
    }
  }

}
