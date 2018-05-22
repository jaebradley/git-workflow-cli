import git from 'simple-git/promise';
import chalk from 'chalk';

import checkoutAndPullMaster from './checkoutAndPullMaster';
import { getCheckoutBranchMessage } from './messages';
import interactiveRebase from './interactiveRebase';

const rebaseCurrentBranch = async () => {
  try {
    const client = git(process.cwd());
    await checkoutAndPullMaster();
    await client.checkout(['-']);
    console.log(getCheckoutBranchMessage('last branch'));
    await interactiveRebase();
    console.log(chalk.magentaBright('⏩  Rebased against master'));
  } catch (e) {
    // error will get console logged
  }
};

export default rebaseCurrentBranch;
