import git from 'simple-git/promise';
import chalk from 'chalk';

import getAllLocalBranchesMergedToMaster from './getAllLocalBranchesMergedToMaster';
import deleteBranch from './deleteBranch';

const getCheckoutBranchMessage = branchName => chalk.bold.cyanBright(`🔍  Checked out ${branchName}`);

const deleteCurrentBranch = async () => {
  const client = git(process.cwd());
  await client.checkout('master');
  console.log(getCheckoutBranchMessage('master'));
  await client.pull('origin', 'master');
  console.log(chalk.bold.greenBright('🕹️  Pulled origin/master'));
  const mergedBranches = await getAllLocalBranchesMergedToMaster();
  console.log(mergedBranches);
  // mergedBranches.forEach(branch => deleteBranch(branch));
};

export default deleteCurrentBranch;
