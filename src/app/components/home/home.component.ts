import { Component, OnInit } from '@angular/core';

import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private metaService: MetaService) { }

  ngOnInit() {
    this.metaService.setTitle('InstaPocketPro');
  }

  get saveContent() {
    return {
      desktopLayout: 'row wrap',
      desc: {
        title: 'Sprint from Zero to App',
        desc: 'Hit the ground running with comprehensive, modern UI components that work across the web, mobile and desktop.'
      },
      img: {
        src: 'assets/images/home/save-content.png',
        srcset: 'assets/images/home/save-content.png, assets/images/home/save-content@2x.png 2x, assets/images/home/save-content@3x.png 3x'
      }
    };
  }

  get fuelContent() {
    return {
      desktopLayout: 'row-reverse wrap',
      desc: {
        title: 'Fast and Consistent',
        desc: 'Finely tuned performance, because every millisecond counts. Fully tested across modern browsers.'
      },
      img: {
        src: 'assets/images/home/fuel-your-mind.png',
        srcset:
          'assets/images/home/fuel-your-mind.png, assets/images/home/fuel-your-mind@2x.png 2x, assets/images/home/fuel-your-mind@3x.png 3x'
      }
    };
  }

}
