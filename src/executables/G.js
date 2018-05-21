#!/usr/bin/env node

import program from 'commander';

import pkg from '../../package.json';

program.version(pkg.version)
  .description('Git Workflow Shortcuts')
  .command('pmdcb', 'Pull master, delete current branch')
  .parse(process.argv);
