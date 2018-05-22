import git from 'simple-git/promise';

const pruneLocalRemoteBranches = () => git(process.cwd()).raw(['remote', 'prune', 'origin']);

export default pruneLocalRemoteBranches;
