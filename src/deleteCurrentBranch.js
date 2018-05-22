import git from 'simple-git/promise';

import {
  getCheckoutBranchMessage,
  getPulledFromMasterMessage,
} from './messages';
import deleteBranch from './deleteBranch';

const deleteCurrentBranch = async () => {
  try {
    const client = git(process.cwd());
    const status = await client.status();
    const { current: currentBranchName } = status;
    await client.checkout('master');
    console.log(getCheckoutBranchMessage('master'));
    await client.pull('origin', 'master');
    console.log(getPulledFromMasterMessage());
    await deleteBranch(currentBranchName);
  } catch (e) {
    // error will already be console logged
  }
};

export default deleteCurrentBranch;
