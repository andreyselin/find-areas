import { getNeighbourRefs } from '../getNeighbourRefs/index.js';

export function markConnected({ matrix, areaMark, x, y }) {
  if (matrix[y]?.[x] === 1) {
    matrix[y][x] = areaMark;

    const neighbourRefs = getNeighbourRefs({ matrix, x, y });

    neighbourRefs.forEach((ref) => {
      markConnected({ matrix, x: ref.x, y: ref.y, areaMark });
    });
  }

}
