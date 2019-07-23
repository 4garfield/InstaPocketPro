import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { computed } from 'mobx';

import { MetaService } from '../../services/meta.service';
import { HomeStore } from '../../mobx/home/home.store';
import { HomeContent } from '../../mobx/home/home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  constructor(private metaService: MetaService, private store: HomeStore) {
  }

  ngOnInit() {
    this.metaService.setTitle('InstaPocketPro');
  }

  @computed
  get content(): HomeContent {
    return this.store.homeContent;
  }

}
