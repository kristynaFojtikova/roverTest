/*
 * Created Date: Sun, 9th May 2021, 22:30:21 pm
 * Author: Kristyna Fojtikova
 * Email: fojtik.kristyna@gmail.com
 * Copyright (c) 2021 Kristyna Fojtikova
 */

import { LandingInput } from './models/LandingInput';
import { landRover } from './landRover';
import { parseLandingIpnut } from './parseLandingInput';

export function landRovers(input: string): string {
  const parsedInput: LandingInput = parseLandingIpnut(input);

  let output = '';

  parsedInput.rovers.forEach((roverInput) => {
    const roverFinalPosition = landRover(
      roverInput,
      parsedInput.plateau,
    );
    if (output.length == 0) {
      output = roverFinalPosition.toString();
    } else {
      output = output + `\n` + roverFinalPosition.toString();
    }
  });

  return output;
}
