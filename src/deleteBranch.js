import git from 'simple-git/promise';

import promptForceDelete from './prompts/promptForceDelete';
import forceDeleteBranch from './forceDeleteBranch';
import { getDeletedBranchMessage } from './messages';
import isFullyMergedErrorMessage from './isFullyMergedErrorMessage';

const deleteBranch = async (branchName) => {
  const client = git(process.cwd());
  const deletedBranchMessage = getDeletedBranchMessage(branchName);
  try {
    await client.deleteLocalBranch(branchName);
    console.log(deletedBranchMessage);
  } catch (e) {
    // error will already be console logged
    if (isFullyMergedErrorMessage({ error: e, branchName })) {
      const { shouldForceDelete } = await promptForceDelete();
      if (shouldForceDelete) {
        await forceDeleteBranch(branchName);
        console.log(deletedBranchMessage);
      }
    }
  }
};

export default deleteBranch;
