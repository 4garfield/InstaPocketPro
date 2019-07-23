import { Injectable } from '@angular/core';
import { observable, action, computed } from 'mobx-angular';

import { HomeContent } from './home.model';
import { HomeService } from './home.service';

@Injectable()
export class HomeStore {

  @observable
  homeContentState: HomeContent;

  constructor(private homeService: HomeService) {
    this.getContent();
  }

  @action
  private getContent() {
    const that = this;
    return this.homeService.getContent().toPromise().then(
      action((data: HomeContent) => {
        that.homeContentState = data;
      })
    );
  }

}
