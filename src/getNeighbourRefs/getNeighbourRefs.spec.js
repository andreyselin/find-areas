import { getNeighbourRefs } from './getNeighbourRefs.js';

describe('utils::getNeighbourRefs', function () {
  const matrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];

  it('Should get not-cut coords', () => {
    const neighbourRefs = getNeighbourRefs({ x: 1, y: 1, matrix });
    expect(neighbourRefs.map(el => el.value)).toEqual([3, 1, 7, 5]);
  });

  it('Should get cut coords', () => {
    const neighbourRefs = getNeighbourRefs({ x: 2, y: 1, matrix });
    expect(neighbourRefs.map(el => el.value)).toEqual([4, 2, 8]);
  });

  it('Should get cut coords', () => {
    const neighbourRefs = getNeighbourRefs({ x: 2, y: 2, matrix });
    expect(neighbourRefs.map(el => el.value)).toEqual([7, 5]);
  });
});
