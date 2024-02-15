import { markConnected } from '../markConnected';

export function findAreas(matrix) {
  // This value is used to mark processed cells and to get length from it
  let nextAreaMark = 2;

  for (let y = 0; y < matrix.length; y += 1) {
    for (let x = 0; x < matrix[y].length; x += 1) {
      if (matrix[y][x] === 1) {
        markConnected({ matrix, areaMark: nextAreaMark, y, x })
        nextAreaMark += 1;
      }
    }
  }

  return nextAreaMark - 2;
}
