'use strict';
const fs = require('fs');

module.exports = (file, salary, carfare) => {
  salary = salary || 0;
  carfare = carfare || 0;
  return new Promise(resolve => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log('require csv file');
        process.exit(1);
      }

      const lines = data.split('\n');
      lines.shift();

      const works = lines
        .map(x => x.split(','))
        .filter(x => x[1] !== '' && x[1])
        .map(x => {
          const start = new Date(x[2]);
          const end = new Date(x[3]);
          const t = x[4].split(':').map(x => Number(x));
          const breakTime = t[0] + t[1] / 60;
          return ((end - start) / 1000 / 60 / 60) - breakTime;
        });

      const salarySum = works.reduce((sum, x) => sum + x, 0) * salary;
      const carfareSum = works.length * carfare * 2;
      resolve(salarySum + carfareSum);
    });
  });
};
