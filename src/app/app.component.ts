import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lifegameangular';
  isRunning = false;

  setIsRunning(value: boolean) {
    this.isRunning = value;
  }
}
