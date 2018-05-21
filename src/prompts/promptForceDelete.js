import inquirer from 'inquirer';

const promptSearchTerm = async () => (
  inquirer.prompt([
    {
      name: 'shouldForceDelete',
      message: 'Force Delete?',
      type: 'confirm',
      default: false,
    },
  ])
);

export default promptSearchTerm;
