#!/usr/bin/env node
'use strict';
const meow = require('meow');
const calc = require('./');

const cli = meow(`
  Usage
    $ happy <input>  -- calc money
`);

calc(cli.input[0]);
