import { UpdateActivatedEvent, UpdateAvailableEvent } from '@angular/service-worker/src/low_level';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

export class SwUpdateMockService {
  public available: Observable<UpdateAvailableEvent> = new Subject();
  public activated: Observable<UpdateActivatedEvent> = new Subject();
  public isEnabled = false;

  public checkForUpdate(): Promise<void> {
    return new Promise((resolve) => resolve());
  }

  public activateUpdate(): Promise<void> {
    return new Promise((resolve) => resolve());
  }
}
