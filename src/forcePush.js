import { spawn } from 'child-process-promise';

const forcePush = branchName => (
  spawn(
    'git',
    [
      'push',
      'origin',
      branchName,
      '--force',
    ],
    { stdio: 'inherit' },
  )
);

export default forcePush;
