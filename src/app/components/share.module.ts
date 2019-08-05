import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MobxAngularModule } from 'mobx-angular';

import { CookieBarComponent } from './cookie-bar/cookie-bar.component';
import { MenuComponent } from './menu/menu.component';
import { InstallComponent } from './install/install.component';
import { FooterComponent } from './footer/footer.component';
import { PromoComponent } from './promo/promo.component';
import { HomeComponent } from './home/home.component';

const components = [
  CookieBarComponent,
  MenuComponent,
  InstallComponent,
  FooterComponent,
  PromoComponent
];

@NgModule({
  declarations: [
    ...components,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatButtonModule,
    MobxAngularModule,
  ],
  exports: [
    ...components
  ],
  providers: []
})
export class ShareModule { }
