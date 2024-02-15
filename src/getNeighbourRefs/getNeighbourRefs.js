const neighboursRelativeCoords = [
  { x: -1, y: 0 },
  { x: 0, y: -1 },
  { x: 0, y: 1 },
  { x: 1, y: 0 },
];

export function getNeighbourRefs({ x, y, matrix }) {
  return neighboursRelativeCoords
    .map((relativeCoordsItem) => {
      const absolute = {
        x: x + relativeCoordsItem.x,
        y: y + relativeCoordsItem.y,
      };

      return {
        value: matrix[absolute.y]?.[absolute.x],
        y: absolute.y,
        x: absolute.x,
      }
    });
}
