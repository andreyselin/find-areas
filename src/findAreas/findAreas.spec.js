import { findAreas } from './findAreas';
import expect from 'expect';

describe('utils::findAreas', function () {
  it('Should mark 2 areas', () => {
    const matrix = [
      [0, 0, 1],
      [0, 0, 1],
      [1, 1, 0],
    ];

    const areasCount = findAreas(matrix);
    expect(areasCount).toEqual(2);
    expect(matrix).toEqual([
      [0, 0, 2],
      [0, 0, 2],
      [3, 3, 0],
    ]);
  });

  it('Should mark 2 areas', () => {
    const matrix = [
      [1, 0, 1],
      [1, 0, 1],
      [0, 1, 0],
    ];

    const areasCount = findAreas(matrix);
    expect(areasCount).toEqual(3);
    expect(matrix).toEqual([
      [2, 0, 3],
      [2, 0, 3],
      [0, 4, 0],
    ]);
  });
});
