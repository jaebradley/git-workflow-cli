import { spawn } from 'child-process-promise';

const interactiveRebase = () => (
  spawn(
    'git',
    [
      'rebase',
      'master',
      '--interactive',
    ],
    { stdio: 'inherit' },
  )
);

export default interactiveRebase;
