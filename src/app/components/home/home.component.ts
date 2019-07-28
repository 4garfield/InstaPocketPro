import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { computed } from 'mobx-angular';

import { MetaService } from '../../services/meta.service';
import { GtagService } from '../../services/gtag.service';
import { HomeStore } from '../../mobx/home/home.store';
import { HomeContent } from '../../mobx/home/home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  constructor(
    private metaService: MetaService,
    private gtagService: GtagService,
    private store: HomeStore) {
  }

  ngOnInit() {
    this.metaService.setTitle('InstaPocketPro');
    this.metaService.addTag({
      name: 'description',
      content: 'save any content to instapocketpro'
    });
  }

  @computed
  get content(): HomeContent {
    return this.store.homeContentState;
  }

  onContactClick() {
    this.gtagService.push('event', 'button', {
      'event_category': 'click',
      'event_label': 'Click contact us button'
    });
  }

}
