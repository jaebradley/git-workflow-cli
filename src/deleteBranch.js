import git from 'simple-git/promise';
import chalk from 'chalk';

import promptForceDelete from './prompts/promptForceDelete';
import forceDeleteBranch from './forceDeleteBranch';

const getDeletedBranchMessage = branchName => chalk.bold.redBright(`🗑  Deleted ${branchName}`);

const deleteBranch = async (branchName) => {
  const client = git(process.cwd());
  const deletedBranchMessage = getDeletedBranchMessage(branchName);
  try {
    await client.deleteLocalBranch(branchName);
    console.log(deletedBranchMessage);
  } catch (e) {
    // error will already be console logged
    if (e.message.indexOf(`The branch '${branchName}' is not fully merged.`) >= 0) {
      const { shouldForceDelete } = await promptForceDelete();
      if (shouldForceDelete) {
        await forceDeleteBranch();
        console.log(deletedBranchMessage);
      }
    }
  }
};

export default deleteBranch;
