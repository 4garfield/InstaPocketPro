import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
// import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// These material modules used by the root module: AppModule
const modules = [
  MatButtonModule,
  // MatCardModule,
  MatSnackBarModule
];

@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class MaterialModule { }
