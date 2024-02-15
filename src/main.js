// const { parseInputString } = require('./parseInputString/parseInputString');
// const { findAreas } = require('./findAreas');

import { parseInputString } from './parseInputString';
import { findAreas } from './findAreas';

import readlineModule from 'node:readline';

const readline = readlineModule.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// const readline = require('node:readline').createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

readline.question(`Enter your matrix here: `, (inputString) => {
  const matrix = parseInputString(inputString);
  const areasCount = findAreas(matrix);
  console.log('Areas count: ', areasCount);
  readline.close();
});
