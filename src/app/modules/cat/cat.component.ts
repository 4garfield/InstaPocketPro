import { Component, OnInit } from '@angular/core';

import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss']
})
export class CatComponent implements OnInit {

  constructor(private metaService: MetaService) { }

  ngOnInit() {
    this.metaService.setTitle('Enjoy Cat - InstaPocketPro');
  }
}
