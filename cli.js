#!/usr/bin/env node
'use strict';
const meow = require('meow');
const calc = require('./');

const cli = meow(`
  Usage
    $ happy <input>  -- calc money
`);

let file = cli.input[0];
calc(file);
