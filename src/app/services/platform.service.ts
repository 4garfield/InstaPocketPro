import { APP_ID, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Injectable()
export class PlatformService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object, @Inject(APP_ID) private appId: string) { }

  isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  isServer(): boolean {
    return isPlatformServer(this.platformId);
  }
}
