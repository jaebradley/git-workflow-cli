import git from 'simple-git/promise';
import chalk from 'chalk';

import getAllLocalBranchesMergedToMaster from './getAllLocalBranchesMergedToMaster';
import deleteBranch from './deleteBranch';
import {
  getCheckoutBranchMessage,
  getPulledFromMasterMessage,
} from './messages';
import pruneLocalRemoteBranches from './pruneLocalRemoteBranches';

const shouldDeleteBranch = branchName => branchName.indexOf('*') < 0 || branchName.indexOf('master') < 0;

const deleteAllBranches = async () => {
  try {
    const client = git(process.cwd());
    await client.checkout('master');
    console.log(getCheckoutBranchMessage('master'));
    await client.pull('origin', 'master');
    console.log(getPulledFromMasterMessage());
    const mergedBranches = await getAllLocalBranchesMergedToMaster();
    mergedBranches.forEach(async (branch) => {
      if (shouldDeleteBranch(branch)) {
        await deleteBranch(branch);
      }
    });
    await pruneLocalRemoteBranches();
    console.log(chalk.bold.redBright('✂️  Pruned local remote branches'));
  } catch (e) {
    // error will be console logged
  }
};

export default deleteAllBranches;
