import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobxAngularModule } from 'mobx-angular';

import { HomeService } from './home/home.service';
import { HomeStore } from './home/home.store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MobxAngularModule
  ],
  exports: [],
  providers: [
    HomeService,
    HomeStore
  ]
})
export class MobxModule { }
