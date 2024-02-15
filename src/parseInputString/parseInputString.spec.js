import { parseInputString } from './parseInputString';

describe('utils::parseInput', function () {
  it('Should parse on-line input', () => {
    const inputString = '1,0,0';
    expect(parseInputString(inputString)).toEqual([[1, 0, 0]])
  });

  it('Should parse multiple-line input', () => {
    const inputString = '1,0,0;0,0,1';
    expect(parseInputString(inputString)).toEqual([
      [1, 0, 0],
      [0, 0, 1]
    ]);
  });
});
