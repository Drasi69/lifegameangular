import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent {
  @Output() run = new EventEmitter<boolean>();

  start() {
    this.run.emit(true);
  }

  stop() {
    this.run.emit(false);
  }

}
