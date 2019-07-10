import { Component, OnInit } from '@angular/core';

import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private metaService: MetaService) { }

  ngOnInit() {
    this.metaService.setTitle('List - InstaPocketPro');
  }
}
