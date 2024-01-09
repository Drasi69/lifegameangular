import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Point } from 'src/app/shared/point';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent {
  @Input() val!: string;
  @Input() row: number = -1;
  @Input() col: number = -1;
  @Output() point = new EventEmitter<Point>();

  click() {
    this.point.emit(new Point(this.col, this.row));
  }
}
