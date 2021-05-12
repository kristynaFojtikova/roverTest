/*
 * Created Date: Sun, 9th May 2021, 22:30:21 pm
 * Author: Kristyna Fojtikova
 * Email: fojtik.kristyna@gmail.com
 * Copyright (c) 2021 Kristyna Fojtikova
 */

import { LandingInput } from './models/LandingInput';
import { Plateau } from './models/Plateau';
import { RoverLandingInput } from './models/RoverLandingInput';

function splitByNewline(text: string) {
  return text.split(/\r\n|\r|\n/);
}

const parseLineIntoValues = (line: string) => {
  return line.split(' ');
};

function toNumber(x: string) {
  const numbersRegex = /([0-9]+)/;
  if (!numbersRegex.test(x)) {
    throw Error('Invalid Input');
  }
  return parseInt(x, 10);
}

export function parseLandingIpnut(input: string): LandingInput {
  const inputLines = splitByNewline(input);

  const platformLine = inputLines[0];
  const platformLineValues = parseLineIntoValues(platformLine);

  if (platformLineValues.length > 2) {
    throw Error('Invalid input');
  }
  const xMax = toNumber(platformLineValues[0]);
  const yMax = toNumber(platformLineValues[1]);
  const plateau: Plateau = new Plateau(xMax, yMax);

  const roversLines = inputLines.slice(1);
  const rovers: RoverLandingInput[] = [];
  for (let i = 0; i < roversLines.length / 2; i++) {
    const initialPositionLine = roversLines[i * 2];
    const initialPositionValues = parseLineIntoValues(
      initialPositionLine,
    );
    const initialPosition = {
      x: toNumber(initialPositionValues[0]),
      y: toNumber(initialPositionValues[1]),
      direction: initialPositionValues[2],
    };
    const actions = roversLines[i * 2 + 1];
    const roverInput: RoverLandingInput = new RoverLandingInput(
      initialPosition,
      actions,
    );
    rovers.push(roverInput);
  }

  const formattedInput: LandingInput = new LandingInput(
    rovers,
    plateau,
  );

  return formattedInput;
}
