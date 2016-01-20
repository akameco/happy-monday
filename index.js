'use strict';
const csv = require('csv');
const fs = require('fs');

let file = process.argv[2];
let base = 1200;

function calc(file) {
  fs.readFile(file, 'utf8', (err, data) => {
    const lines = data.split('\n');
    const header = lines.shift();
    const ans = lines
      .map(x => x.split(','))
      .filter(x => x[1] !== '' && x[1] !== undefined)
      .map(x => {
        const start = new Date(x[2]);
        const end = new Date(x[3]);
        let t = x[4].split(':').map(x => Number(x));
        const breakTime = t[0] + t[1] / 60;
        return ((end - start) / 1000 / 60 / 60) - breakTime;
      })
      .reduce((sum,x) => sum + x, 0);
    console.log(ans * 1200);
  });
}

module.exports = calc;
