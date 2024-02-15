import { markConnected } from './markConnected';

describe('utils::markConnected', function () {
  const areaMark = 2;

  it('Should not mark connected to empty', () => {
    const matrix = [
      [0, 0, 1],
      [0, 1, 1],
      [0, 1, 1],
    ];
    markConnected({ matrix, areaMark, y: 1, x: 0 });
    expect(matrix).toEqual([
      [0, 0, 1],
      [0, 1, 1],
      [0, 1, 1],
    ]);
  });

  it('Should mark connected to available', () => {
    const matrix = [
      [0, 0, 1],
      [0, 1, 1],
      [0, 1, 1],
    ];
    markConnected({ matrix, areaMark, y: 0, x: 2 });
    expect(matrix).toEqual([
      [0, 0, 2],
      [0, 2, 2],
      [0, 2, 2],
    ]);
  });

  it('Should not mark connected to busy', () => {
    const matrix = [
      [0, 0, 3],
      [0, 3, 1],
      [0, 3, 1],
    ];
    markConnected({ matrix, areaMark, y: 0, x: 2 });
    expect(matrix).toEqual([
      [0, 0, 3],
      [0, 3, 1],
      [0, 3, 1],
    ]);
  });
});
