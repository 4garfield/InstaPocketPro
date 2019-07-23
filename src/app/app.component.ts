import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';
import { Subscription } from 'rxjs/Subscription';

import { PlatformService } from './services/platform.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {

  promptEvent: any;
  showInstallButton = false;
  shouldInstall = true;

  swUpdateSub: Subscription;
  snackBarActionsub: Subscription;

  constructor(private platformService: PlatformService, private swUpdate: SwUpdate, private snackBar: MatSnackBar) { }

  ngOnInit() {
    if (this.platformService.isBrowser()) {
      window.addEventListener('beforeinstallprompt', event => {
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

  installApp(): void {
    if (this.platformService.isBrowser()) {
      this.showInstallButton = false;
      this.promptEvent.prompt();
      this.promptEvent.userChoice.then((choiceResult) => {
        if (choiceResult.outcome !== 'accepted') {
          this.shouldInstall = false;
        }
        this.promptEvent = null;
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
