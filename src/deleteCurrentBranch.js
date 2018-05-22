import git from 'simple-git/promise';
import chalk from 'chalk';

import promptForceDelete from './prompts/promptForceDelete';

const getCheckoutBranchMessage = branchName => chalk.bold.cyanBright(`🔍  Checked out ${branchName}`);
const getDeletedBranchMessage = branchName => chalk.bold.redBright(`🗑  Deleted ${branchName}`);

const deleteCurrentBranch = async () => {
  try {
    const client = git(process.cwd());
    const status = await client.status();
    const { current: currentBranchName } = status;
    const checkoutBranchMessage = getCheckoutBranchMessage(currentBranchName);
    const deletedBranchMessage = getDeletedBranchMessage(currentBranchName);

    try {
      await client.checkout('master');
      console.log(checkoutBranchMessage);
      await client.pull('origin', 'master');
      console.log(chalk.bold.greenBright('🕹️  Pulled origin/master'));
      await client.deleteLocalBranch(currentBranchName);
      console.log(deletedBranchMessage);
    } catch (e) {
      // error will already be console logged
      if (e.message.indexOf(`The branch '${currentBranchName}' is not fully merged.`) >= 0) {
        const { shouldForceDelete } = await promptForceDelete();
        if (shouldForceDelete) {
          await client.deleteLocalBranch(currentBranchName);
          console.log(deletedBranchMessage);
        } else {
          await client.checkout(currentBranchName);
          console.log(checkoutBranchMessage);
        }
      } else {
        await client.checkout(currentBranchName);
        console.log(checkoutBranchMessage);
      }
    }
  } catch (e) {
    // error will already be console logged
  }
};

export default deleteCurrentBranch;
