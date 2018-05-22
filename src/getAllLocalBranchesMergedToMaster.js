import git from 'simple-git/promise';

const getAllLocalBranchesMergedToMaster = async () => {
  const branches = await git(process.cwd()).raw(['branch', '--merged', 'master']);
  return branches.trim().split('\n').map(branch => branch.trim());
};

export default getAllLocalBranchesMergedToMaster;
