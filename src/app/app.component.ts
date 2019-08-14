import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';
import { Subscription } from 'rxjs/Subscription';

import { PlatformService } from './services/platform.service';
import { GtagService } from './services/gtag.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {

  promptEvent: any;
  showInstallButton = false;

  swUpdateSub: Subscription;
  snackBarActionsub: Subscription;

  addToHomeKey = 'web.app.instapocketpro.addToHome';

  constructor(
    private platformService: PlatformService,
    private gtagService: GtagService,
    private swUpdate: SwUpdate,
    private snackBar: MatSnackBar,
    private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.gtagService.push('config', 'UA-90263726-3', { 'page_path': event.urlAfterRedirects });
      }
    });
  }

  ngOnInit() {
    if (this.platformService.isBrowser()) {
      window.addEventListener('beforeinstallprompt', event => {
        // Prevent Chrome 76 and later from showing the mini-infobar
        event.preventDefault();
        this.promptEvent = event;
        this.showInstallButton = true;
      });

      if (this.swUpdate.isEnabled) {
        this.doUpdate();
      }
    }
  }

  ngOnDestroy() {
    if (this.swUpdateSub) {
      this.swUpdateSub.unsubscribe();
    }
    if (this.snackBarActionsub) {
      this.snackBarActionsub.unsubscribe();
    }
  }

  shouldInstall() {
    if (this.platformService.isBrowser()) {
      const addToHomeVal = window.localStorage.getItem(this.addToHomeKey);
      if (addToHomeVal && JSON.parse(addToHomeVal)) {
        const addToHomeValObj = JSON.parse(addToHomeVal);
        if (addToHomeValObj.added) {
          return false;
        }
      }
    }
    return true;
  }

  installApp(): void {
    if (this.platformService.isBrowser()) {
      this.showInstallButton = false;
      this.promptEvent.prompt();
      this.promptEvent.userChoice.then((choiceResult) => {
        const addToHomeVal = {
          added: true,
          lastDisplayTime: new Date().getTime()
        };
        if (choiceResult.outcome !== 'accepted') {
          addToHomeVal.added = false;
        }
        this.promptEvent = null;

        window.localStorage.setItem(this.addToHomeKey, JSON.stringify(addToHomeVal));
      });
    }
  }

  doUpdate() {
    this.swUpdateSub = this.swUpdate.available.subscribe(() => {
      const snackBarRef = this.snackBar.open('There is updates avaliable', 'Update', {
        duration: 60000,
        horizontalPosition: 'left'
      });

      this.snackBarActionsub = snackBarRef.onAction().subscribe(() => {
        window.location.reload();
      });
    });
  }

}
