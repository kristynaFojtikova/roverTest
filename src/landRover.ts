/*
 * Created Date: Tue, 11th May 2021, 02:13:34 am
 * Author: Kristyna Fojtikova
 * Email: fojtik.kristyna@gmail.com
 * Copyright (c) 2021 Kristyna Fojtikova
 */

import { Plateau } from './models/Plateau';
import { RoverLandingInput } from './models/RoverLandingInput';
import { RoverPosition } from './models/RoverPosition';

const directions = ['N', 'E', 'S', 'W'];

const turnLeft = (initalPosition: RoverPosition): RoverPosition => {
  const i =
    directions.indexOf(initalPosition.direction) + directions.length;
  const newDirection = directions[(i - 1) % directions.length];
  return new RoverPosition(
    initalPosition.x,
    initalPosition.y,
    newDirection,
  );
};

const turnRight = (initalPosition: RoverPosition): RoverPosition => {
  const i =
    directions.indexOf(initalPosition.direction) + directions.length;
  const newDirection = directions[(i + 1) % directions.length];
  return new RoverPosition(
    initalPosition.x,
    initalPosition.y,
    newDirection,
  );
};

const move = (
  initalPosition: RoverPosition,
  plateau: Plateau,
): RoverPosition => {
  const newPosition: RoverPosition = new RoverPosition(
    initalPosition.x,
    initalPosition.y,
    initalPosition.direction,
  );

  switch (initalPosition.direction) {
    case 'N':
      if (initalPosition.y < plateau.yMax) {
        newPosition.y += 1;
      }
      break;
    case 'E':
      if (initalPosition.x < plateau.xMax) {
        newPosition.x += 1;
      }
      break;
    case 'S':
      if (initalPosition.y > 0) {
        newPosition.y -= 1;
      }
      break;
    case 'W':
      if (initalPosition.x > 0) {
        newPosition.x -= 1;
      }
      break;
    default:
  }

  return newPosition;
};

const executeAction = (
  position: RoverPosition,
  action: string,
  plateau: Plateau,
): RoverPosition => {
  let newPosition: RoverPosition = position;

  switch (action) {
    case 'M':
      newPosition = move(position, plateau);
      break;
    case 'L':
      newPosition = turnLeft(position);
      break;
    case 'R':
      newPosition = turnRight(position);
      break;
    default:
  }
  return newPosition;
};

export function landRover(
  input: RoverLandingInput,
  platform: Plateau,
): RoverPosition {
  let currentPosition = input.initialPosition;
  for (const actionLetter of input.actions) {
    currentPosition = executeAction(
      currentPosition,
      actionLetter,
      platform,
    );
  }
  return currentPosition;
}
