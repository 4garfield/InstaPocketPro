import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ShowcaseComponent } from './showcase.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: ShowcaseComponent, pathMatch: 'full' }
    ])
  ]
})
export class ShowcaseRoutingModule { }
