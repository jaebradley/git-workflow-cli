import git from 'simple-git/promise';

const execute = async () => {
  try {
    const client = git(process.cwd());
    const status = await client.status();
    const { current: currentBranchName } = status;
    await client.deleteLocalBranch(currentBranchName);
  } catch (e) {
    console.error(`Rut ro - there was an error: ${e}`); // eslint-disable-line no-console
  }
};

execute();
