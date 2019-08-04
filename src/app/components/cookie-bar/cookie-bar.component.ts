import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import { PlatformService } from '../../services/platform.service';

@Component({
  selector: 'app-cookie-bar',
  templateUrl: './cookie-bar.component.html',
  styleUrls: ['./cookie-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CookieBarComponent implements OnInit {

  showCookieBar = true;

  private cookieAccepted = 'cookieAccepted';

  constructor(
    private platformService: PlatformService,
    private cookieService: CookieService
  ) { }

  ngOnInit() {
    if (this.platformService.isBrowser()) {
      if (this.cookieService.get(this.cookieAccepted)) {
        this.showCookieBar = false;
      }
    }
  }

  acceptCookie() {
    if (this.platformService.isBrowser()) {
      this.showCookieBar = false;
      const livedDate = new Date();
      livedDate.setFullYear(livedDate.getFullYear() + 2);
      this.cookieService.set(this.cookieAccepted, 'true', livedDate, '/');
    }
  }

}
