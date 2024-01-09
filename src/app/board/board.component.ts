import { Observable } from 'rxjs';
import { Point } from './../shared/point';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  maxCol = 12;
  maxRow = 6;
  world: string[][] = Array(this.maxRow).fill(null).map(row => new Array(this.maxCol).fill(null));
  @Input() isRunning = false;

  constructor() {
    this.loadWorld();
    setInterval(() => {
      if (this.isRunning) {
        this.play();
      }
    }, 2000);
}

  click(point: Point) {
    this.world[point.getY()][point.getX()] = 'X';
  }

  play() {
    const nextWorld = this.world.slice();
    let isModified = false;
    let n = 0;
    let deads = [];
    let lives = [];

    for (let row = 0; row < this.maxRow; row++) {
      for (let col = 0; col < this.maxCol; col++) {
        n = this.getNeighbours(row, col);
        if (!nextWorld[row][col] && n === 3) {
          lives.push(new Point(row, col));
        } else if (nextWorld[row][col] === 'X' && (n < 2 || n > 3)) {
          deads.push(new Point(row, col));
        }
      }
    }

    if (lives.length > 0 || deads.length > 0) {
      isModified = true;
    }

    for (let i of lives) {
      nextWorld[i.getX()][i.getY()] = 'X';
    }

    for (let i of deads) {
      nextWorld[i.getX()][i.getY()] = "";
    }

    if (isModified) {
      this.world = nextWorld;
    }
  }

  getNeighbours(row: number, col: number) {
    let num = 0;

    if (row > 0)
    {
        if (col > 0 && this.world[row-1][col-1])
        {
            num++;
        }
        if (this.world[row-1][col])
            num++;
        if (col < this.maxCol - 1 && this.world[row-1][col+1])
        {
            num++;
        }
    }
    if (col > 0 && this.world[row][col - 1])
    {
        num++;
    }
    if (col < this.maxCol - 1 && this.world[row][col + 1])
    {
        num++;
    }
    if (row < this.maxRow - 1)
    {
        if (col > 0 && this.world[row + 1][col - 1])
        {
            num++;
        }
        if (this.world[row + 1][col])
            num++;
        if (col < this.maxCol - 1 && this.world[row + 1][col + 1])
        {
            num++;
        }
    }

    return num;
  }

  loadWorld() {
    this.world[0][1] = 'X';
    this.world[0][2] = 'X';
    this.world[1][1] = 'X';
    this.world[1][4] = 'X';
  }
}
