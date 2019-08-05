import { ChangeDetectionStrategy, Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-install',
  templateUrl: './install.component.html',
  styleUrls: ['./install.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InstallComponent implements OnInit {

  @Output() installClicked = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onClick(event) {
    event.preventDefault();
    this.installClicked.emit();
  }

}
