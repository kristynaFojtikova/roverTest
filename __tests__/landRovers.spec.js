import { landRovers } from '../src/landRovers';
import testDataSet from '../testData/testDataSet';

describe('Land rovers', () => {
  test('rovers should land and execute their inputs', () => {
    const input = testDataSet.input;

    const output = testDataSet.output;

    expect(landRovers(input)).toEqual(output);
  });
});
