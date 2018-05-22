import git from 'simple-git/promise';

import {
  getCheckoutBranchMessage,
  getPulledFromMasterMessage,
} from './messages';

const checkoutAndPullMaster = async () => {
  const client = git(process.cwd());
  await client.checkout('master');
  console.log(getCheckoutBranchMessage('master'));
  await client.pull('origin', 'master');
  console.log(getPulledFromMasterMessage());
};

export default checkoutAndPullMaster;
