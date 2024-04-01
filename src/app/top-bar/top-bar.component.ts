import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  @Output() run = new EventEmitter<boolean>();

  start() {
    this.run.emit(true);
  }

  stop() {
    this.run.emit(false);
  }

}
