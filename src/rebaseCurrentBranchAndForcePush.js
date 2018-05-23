import chalk from 'chalk';

import rebaseCurrentBranch from './rebaseCurrentBranch';
import getCurrentBranchName from './getCurrentBranchName';
import forcePush from './forcePush';

const rebaseCurrentBranchAndForcePush = async () => {
  await rebaseCurrentBranch();
  const currentBranchName = await getCurrentBranchName();
  await forcePush(currentBranchName);
  console.log(chalk.redBright(`🤞  Force pushed to origin/${currentBranchName}`));
};

export default rebaseCurrentBranchAndForcePush;
