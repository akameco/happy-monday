#!/usr/bin/env node
'use strict';
const meow = require('meow');
const happy = require('./');

const cli = meow(`
  Usage
    $ happy <input>  -- calc money
  Options
    -s, --salary  時給
    -c, --cost    交通費
`, {
  alias: {
    s: 'salary',
    c: 'cost'
  }
});

happy(cli.input[0], cli.flags.salary, cli.flags.cost).then(sum => {
  console.log(sum);
});
