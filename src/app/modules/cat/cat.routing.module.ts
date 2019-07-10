import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CatComponent } from './cat.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'cat', component: CatComponent, pathMatch: 'full' }
    ])
  ]
})
export class CatRoutingModule { }
