import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent {
  @Input() round = 0;
  @Input() columns = 0;
  @Input() rows = 0;
  @Input() status = "Stopped";

}
