import { ChangeDetectionStrategy, Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PromoComponent implements OnInit {

  @Input() content: any;

  constructor() { }

  ngOnInit() { }

}
