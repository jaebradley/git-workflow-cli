import git from 'simple-git/promise';

import getAllLocalBranchesMergedToMaster from './getAllLocalBranchesMergedToMaster';
import deleteBranch from './deleteBranch';
import {
  getCheckoutBranchMessage,
  getPulledFromMasterMessage,
} from './messages';

const shouldDeleteBranch = branchName => branchName.indexOf('*') < 0 || branchName.indexOf('master') < 0;

const deleteAllBranches = async () => {
  const client = git(process.cwd());
  await client.checkout('master');
  console.log(getCheckoutBranchMessage('master'));
  await client.pull('origin', 'master');
  console.log(getPulledFromMasterMessage());
  const mergedBranches = await getAllLocalBranchesMergedToMaster();
  mergedBranches.forEach(async (branch) => {
    if (shouldDeleteBranch(branch)) {
      console.log(`${branch} was merged to master and will now be deleted`);
      await deleteBranch(branch);
    }
  });
};

export default deleteAllBranches;
