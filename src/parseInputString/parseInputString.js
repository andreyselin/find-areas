export function parseInputString(inputString) {
  return inputString
    .split(';')
    .map((rowString) => rowString
      .split(',')
      .map(el => Number(el))
    );
}
