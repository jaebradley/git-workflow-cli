#!/usr/bin/env node

import program from 'commander';

import pkg from '../../package.json';

program.version(pkg.version)
  .description('Git Workflow Shortcuts')
  .command('dcb', 'Pull master, delete current branch')
  .command('dab', 'Pull master, delete all local branches that have been merged')
  .command('rcb', 'Pull master, rebase current branch')
  .command('rcbfp', 'Pull master, rebase current branch, and force push')
  .command('cpm', 'Pull master')
  .parse(process.argv);
