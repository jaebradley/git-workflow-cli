import git from 'simple-git/promise';

const forceDeleteBranch = branchName => git(process.cwd()).branch(['-D', branchName]);

export default forceDeleteBranch;
