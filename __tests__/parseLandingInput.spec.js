/*
 * Created Date: Sun, 9th May 2021, 22:33:00 pm
 * Author: Kristyna Fojtikova
 * Email: fojtik.kristyna@gmail.com
 * Copyright (c) 2021 Kristyna Fojtikova
 */

import { parseLandingIpnut } from '../src/parseLandingInput';
import testDataSet from '../testData/testDataSet';

describe('Parse input', () => {
  test('interpret sample values correctly', () => {
    const input = testDataSet.input;

    const output = testDataSet.parsedInput;

    expect(parseLandingIpnut(input)).toEqual(output);
  });
});

describe('Parse nonsense input', () => {
  test('Return error', () => {
    const input = 'djskald skal jdskla lsdasdsadsa';

    const output = Error('Invalid input');

    try {
      const result = parseLandingIpnut(input);
    } catch (err) {
      expect(err).toEqual(output);
    }
  });
});
