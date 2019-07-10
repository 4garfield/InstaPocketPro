import { Component, HostListener, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

import { PlatformService } from './services/platform.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  promptEvent: any;
  showInstallButton = false;
  shouldInstall = true;
  updateAvailable = false;

  constructor(private platformService: PlatformService, private swUpdate: SwUpdate) { }

  ngOnInit() {
    if (this.platformService.isBrowser()) {
      window.addEventListener('beforeinstallprompt', event => {
        this.promptEvent = event;
        this.showInstallButton = true;
      });
    }
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        this.updateAvailable = true;
      });
    }
  }

  installApp(): void {
    this.showInstallButton = false;
    this.promptEvent.prompt();
    this.promptEvent.userChoice.then((choiceResult) => {
      if (choiceResult.outcome !== 'accepted') {
        console.log('no');
        this.shouldInstall = false;
      }
      this.promptEvent = null;
    });
  }

  doUpdate() {
    if (this.platformService.isBrowser()) {
      window.location.reload();
    }
  }

}
