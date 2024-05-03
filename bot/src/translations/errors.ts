export const errors = {
  autocompleteError: (option: string) => `Failed to autocomplete ${option}.`,
  commandError: 'There was an error while executing the command.',
  commandExecutionFailed: (commandName: string) =>
    `Command ${commandName} execution failed.`,
  noApplicationId:
    'No application ID provided. Please provide an application ID in the .env file.',
  noStrapiUrl:
    'No Strapi URL provided. Please provide a Strapi URL in the .env file.',
  noToken: 'No token provided. Please provide a token in the .env file.',
  questionNotDefinedCorrectly: 'The question is not defined correctly.',
  questionNotFound: 'That question does not exist.',
};
