import { NgModule } from '@angular/core';

import { ShowcaseComponent } from './showcase.component';
import { ShowcaseRoutingModule } from './showcase.routing.module';

@NgModule({
  declarations: [ShowcaseComponent],
  imports: [
    ShowcaseRoutingModule
  ]
})
export class ShowcaseModule { }
