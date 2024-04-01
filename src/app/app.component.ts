import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lifegameangular';
  isRunning = false;
  columns = 0;
  rows = 0;
  status = '';
  round = 0;

  setIsRunning(value: boolean) {
    this.isRunning = value;
  }

  setColumns(value: number) {
    this.columns = value;
  }

  setRows(value: number) {
    this.rows = value;
  }

  setStatus(value: string) {
    this.status = value;
  }

  setRound(value: number) {
    this.round = value;
  }
}
