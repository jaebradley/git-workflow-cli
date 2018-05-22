import { spawn } from 'child_process';

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
