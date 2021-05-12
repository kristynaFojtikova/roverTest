/*
 * Created Date: Sun, 9th May 2021, 23:56:15 pm
 * Author: Kristyna Fojtikova
 * Email: fojtik.kristyna@gmail.com
 * Copyright (c) 2021 Kristyna Fojtikova
 */

export class RoverPosition {
  x: number;
  y: number;
  direction: string;

  constructor(x: number, y: number, direction: string) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  toString(): string {
    return `${this.x} ${this.y} ${this.direction}`;
  }
}
