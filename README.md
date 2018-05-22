# `git-workflow-cli`

[![Build Status](https://travis-ci.org/jaebradley/git-workflow-cli.svg?branch=master)](https://travis-ci.org/jaebradley/git-workflow-cli)
[![Greenkeeper badge](https://badges.greenkeeper.io/jaebradley/git-workflow-cli.svg)](https://greenkeeper.io/)
[![npm](https://img.shields.io/npm/v/git-workflow-cli.svg)](https://www.npmjs.com/package/git-workflow-cli)
[![npm](https://img.shields.io/npm/dt/git-workflow-cli.svg)](https://www.npmjs.com/package/git-workflow-cli)

Some minor `git` workflow commands that I could probably write bash scripts for.

* `G dcb` - Delete current branch that's been merged
  * Checkout `master`
  * Pull from `origin`
  * Delete previous branch
    * Option to force delete
* `G dab` - Delete all merged branches
  * Checkout `master`
  * Pull from `origin`
  * Find all `merged` branches via the `git branch --merged master` command
  * Delete all branches
  * Prune all remote local branches
