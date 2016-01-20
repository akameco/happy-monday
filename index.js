'use strict';
const fs = require('fs');
const base = 1200;

function calc(file) {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    }

    const lines = data.split('\n');
    lines.shift();

    const ans = lines
      .map(x => x.split(','))
      .filter(x => x[1] !== '' && x[1] !== undefined)
      .map(x => {
        const start = new Date(x[2]);
        const end = new Date(x[3]);
        const t = x[4].split(':').map(x => Number(x));
        const breakTime = t[0] + t[1] / 60;
        return ((end - start) / 1000 / 60 / 60) - breakTime;
      })
      .reduce((sum, x) => sum + x, 0);
    console.log(ans * base);
  });
}

module.exports = calc;
