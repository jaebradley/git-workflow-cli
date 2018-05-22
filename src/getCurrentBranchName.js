import git from 'simple-git/promise';

const getCurrentBranchName = async () => {
  const { current: currentBranchName } = await git(process.cwd()).status();
  return currentBranchName;
};

export default getCurrentBranchName;
