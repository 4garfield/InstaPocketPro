import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TodoComponent } from './todo.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: TodoComponent,
        pathMatch: 'full'
      }
    ])
  ]
})
export class TodoRoutingModule { }
