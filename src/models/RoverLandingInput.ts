/*
 * Created Date: Sun, 9th May 2021, 23:44:21 pm
 * Author: Kristyna Fojtikova
 * Email: fojtik.kristyna@gmail.com
 * Copyright (c) 2021 Kristyna Fojtikova
 */

import { RoverPosition } from './RoverPosition';

export class RoverLandingInput {
  initialPosition: RoverPosition;
  actions: string;

  constructor(initialPosition: RoverPosition, actions: string) {
    this.initialPosition = initialPosition;
    this.actions = actions;
  }
}
