import chalk from 'chalk';

const getCheckoutBranchMessage = branchName => chalk.bold.cyanBright(`🔍  Checked out ${branchName}`);
const getDeletedBranchMessage = branchName => chalk.bold.redBright(`🗑  Deleted ${branchName}`);
const getPulledFromMasterMessage = () => chalk.bold.greenBright('🕹️  Pulled origin/master');

export {
  getCheckoutBranchMessage,
  getDeletedBranchMessage,
  getPulledFromMasterMessage,
};
