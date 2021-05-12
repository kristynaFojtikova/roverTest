const TestDataSet = {
  input: '5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM',
  output: '1 3 N\n5 1 E',
  parsedInput: {
    plateau: { xMax: 5, yMax: 5 },
    rovers: [
      {
        initialPosition: {
          x: 1,
          y: 2,
          direction: 'N',
        },
        actions: 'LMLMLMLMM',
      },
      {
        initialPosition: {
          x: 3,
          y: 3,
          direction: 'E',
        },
        actions: 'MMRMMRMRRM',
      },
    ],
  },
};

export default TestDataSet;
