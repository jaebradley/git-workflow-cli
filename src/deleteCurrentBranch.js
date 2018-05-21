import git from 'simple-git/promise';
import chalk from 'chalk';

import promptForceDelete from './prompts/promptForceDelete';

const deleteCurrentBranch = async () => {
  try {
    const client = git(process.cwd());
    const status = await client.status();
    const { current: currentBranchName } = status;
    try {
      await client.checkout('master');
      console.log(chalk.bold.cyanBright('🔍  Checking out master'));
      await client.pull('origin', 'master');
      console.log(chalk.bold.greenBright('🕹️  Pulling master'));
      await client.deleteLocalBranch(currentBranchName);
      console.log(chalk.bold.redBright(`🗑  Deleting ${currentBranchName}`));
    } catch (e) {
      // error will already be console logged
      if (e.message.indexOf(`The branch '${currentBranchName}' is not fully merged.`) >= 0) {
        const { shouldForceDelete } = await promptForceDelete();
        if (shouldForceDelete) {
          await client.deleteLocalBranch(currentBranchName);
        } else {
          await client.checkout(currentBranchName);
        }
      } else {
        await client.checkout(currentBranchName);
      }
    }
  } catch (e) {
    // error will already be console logged
  }
};

export default deleteCurrentBranch;
