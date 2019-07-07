import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
  imports: [
    MatCardModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
