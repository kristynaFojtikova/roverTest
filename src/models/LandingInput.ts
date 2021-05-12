/*
 * Created Date: Tue, 11th May 2021, 01:47:40 am
 * Author: Kristyna Fojtikova
 * Email: fojtik.kristyna@gmail.com
 * Copyright (c) 2021 Kristyna Fojtikova
 */

import { Plateau } from './Plateau';
import { RoverLandingInput } from './RoverLandingInput';

export class LandingInput {
  plateau: Plateau;
  rovers: RoverLandingInput[];

  constructor(rovers: RoverLandingInput[], plateau: Plateau) {
    this.rovers = rovers;
    this.plateau = plateau;
  }
}
