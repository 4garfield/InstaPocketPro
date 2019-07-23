import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {

  constructor(private metaService: MetaService) { }

  ngOnInit() {
    this.metaService.setTitle('Todo - InstaPocketPro');
    this.metaService.addTag({
      name: 'description',
      content: 'try out todo at instapocketpro'
    });
  }
}
