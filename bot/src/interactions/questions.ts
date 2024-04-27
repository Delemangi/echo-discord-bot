import { getQuestionsByTerm } from '../data/questions.js';
import { errors } from '../translations/errors.js';
import { logger } from '../utils/logger.js';
import { createOptions, transformOptions } from './options.js';
import { type AutocompleteInteraction } from 'discord.js';

export const handleFaqAutocomplete = async (
  interaction: AutocompleteInteraction,
) => {
  const searchTerm = interaction.options.getFocused();
  const questions = await getQuestionsByTerm(searchTerm);
  const questionNames = questions.map((question) => question.name);
  const transformedQuestionNames = Object.entries(
    transformOptions(questionNames),
  );
  const questionOptions = createOptions(transformedQuestionNames);

  try {
    await interaction.respond(questionOptions);
  } catch {
    logger.error(errors.autocompleteError('faq'));
  }
};
