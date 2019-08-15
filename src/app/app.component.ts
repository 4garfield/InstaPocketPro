import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';
import { Subscription } from 'rxjs/Subscription';

import { PlatformService } from './services/platform.service';
import { GtagService } from './services/gtag.service';

import isEmpty from 'lodash-es/isEmpty';
import now from 'lodash-es/now';

interface AppInstalled {
  added: boolean;
  lastDisplayTime: number;
}

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

  addToHomeKey = 'web.app.instapocketpro.installed';

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
      this.checkInstallation();
      window.addEventListener('beforeinstallprompt', (event) => {
        // Prevent Chrome 76 and later from showing the mini-infobar
        event.preventDefault();
        this.promptEvent = event;
        this.showInstallButton = true;
      });
      window.addEventListener('appinstalled', (event) => {
        this.updateAppInstalled(true);
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

  checkInstallation() {
    if (this.platformService.isBrowser()) {
      // detecting if app is launched from the home screen
      if (window.matchMedia('(display-mode: standalone)').matches || window.navigator['standalone'] === true) {
        return false;
      } else {
        const appInstalled = window.localStorage.getItem(this.addToHomeKey);
        if (!isEmpty(appInstalled)) {
          const appInstalledObj: AppInstalled = JSON.parse(appInstalled);
          if (appInstalledObj.added) {
            return false;
          } else if (now() - appInstalledObj.lastDisplayTime < (1000 * 60 * 60 * 24 * 30)) {
            return false;
          }
        }
      }
      return true;

    }
  }

  installApp(): void {
    if (this.platformService.isBrowser()) {
      this.showInstallButton = false;
      this.promptEvent.prompt();
      this.promptEvent.userChoice.then((choiceResult) => {

        if (choiceResult.outcome !== 'accepted') {
          this.updateAppInstalled(false);
        }
        this.promptEvent = null;

      });
    }
  }

  private updateAppInstalled(added: boolean) {
    const appInstalled: AppInstalled = {
      added: added,
      lastDisplayTime: now()
    };
    window.localStorage.setItem(this.addToHomeKey, JSON.stringify(appInstalled));
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
