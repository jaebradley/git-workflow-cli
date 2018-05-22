const isFullyMergedErrorMessage = ({ error, branchName }) => error.message.indexOf(`The branch '${branchName}' is not fully merged.`) >= 0;

export default isFullyMergedErrorMessage;
