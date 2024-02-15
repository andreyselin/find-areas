import { parseInputString } from './parseInputString/index.js';
import { findAreas } from './findAreas/index.js';
import readlineModule from 'node:readline';

const readline = readlineModule.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Enter your matrix here: `, (inputString) => {
  const matrix = parseInputString(inputString);
  const areasCount = findAreas(matrix);
  console.log('Areas count: ', areasCount);
  readline.close();
});
