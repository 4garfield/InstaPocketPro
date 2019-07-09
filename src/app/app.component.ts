import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

import { PlatformService } from './services/platform.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  promptEvent;
  updateAvailable = false;

  constructor(private platformService: PlatformService, private swUpdate: SwUpdate) {
    if (this.platformService.isBrowser()) {
      window.addEventListener('beforeinstallprompt', event => {
        this.promptEvent = event;
      });
    }
  }

  ngOnInit() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        this.updateAvailable = true;
      });
    }
  }

  installApp(): void {
    this.promptEvent.prompt();
  }

  doUpdate() {
    if (this.platformService.isBrowser()) {
      window.location.reload();
    }
  }

}
