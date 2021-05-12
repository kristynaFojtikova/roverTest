/*
 * Created Date: Tue, 11th May 2021, 02:15:56 am
 * Author: Kristyna Fojtikova
 * Email: fojtik.kristyna@gmail.com
 * Copyright (c) 2021 Kristyna Fojtikova
 */

import { landRover } from '../src/landRover';
import { RoverLandingInput } from '../src/models/RoverLandingInput';
import { RoverPosition } from '../src/models/RoverPosition';
import TestDataSet from '../testData/testDataSet';

describe('Land rover', () => {
  test('land a rover and execute correct actions', () => {
    const output = new RoverPosition(1, 3, 'N');

    expect(
      landRover(
        TestDataSet.parsedInput.rovers[0],
        TestDataSet.parsedInput.plateau,
      ),
    ).toEqual(output);
  });
});

describe('Will not drive outside of plateau', () => {
  test('safety measures, rover will stay put if mistakenly assigned invalid actions', () => {
    const output = new RoverPosition(5, 5, 'N');

    expect(
      landRover(
        new RoverLandingInput(new RoverPosition(5, 5, 'N'), 'MMMM'),
        TestDataSet.parsedInput.plateau,
      ),
    ).toEqual(output);
  });
});

describe('Turning', () => {
  test('interpret turning right', () => {
    const roverInput = new RoverLandingInput(
      new RoverPosition(5, 5, 'N'),
      'RRRRR',
    );
    const output = new RoverPosition(5, 5, 'E');

    expect(
      landRover(roverInput, TestDataSet.parsedInput.plateau),
    ).toEqual(output);
  });
});

describe('Turning', () => {
  test('interpret turning left', () => {
    const roverInput = new RoverLandingInput(
      new RoverPosition(5, 5, 'N'),
      'LLLLL',
    );
    const output = new RoverPosition(5, 5, 'W');

    expect(
      landRover(roverInput, TestDataSet.parsedInput.plateau),
    ).toEqual(output);
  });
});

describe('Moving', () => {
  test('interpret moving forward', () => {
    const roverInput = new RoverLandingInput(
      new RoverPosition(5, 5, 'S'),
      'MMMMM',
    );
    const output = new RoverPosition(5, 0, 'S');

    expect(
      landRover(roverInput, TestDataSet.parsedInput.plateau),
    ).toEqual(output);
  });
});
