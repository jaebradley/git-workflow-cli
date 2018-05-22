import git from 'simple-git/promise';

import checkoutAndPullMaster from './checkoutAndPullMaster';

const rebaseCurrentBranch = async () => {
  try {
    const client = git(process.cwd());
    await checkoutAndPullMaster();
    await client.checkout(['-']);
    await client.rebase(['master']);
  } catch (e) {
    // error will get console logged
  }
};

export default rebaseCurrentBranch;
