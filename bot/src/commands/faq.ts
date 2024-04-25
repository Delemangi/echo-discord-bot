import { getQuestionsByTerm } from '../data/questions.js';
import { commands } from '../translations/commands.js';
import { errors } from '../translations/errors.js';
import { getQuestionFormat } from '../utils/format.js';
import {
  type ChatInputCommandInteraction,
  SlashCommandBuilder,
} from 'discord.js';

const name = 'faq';

export const data = new SlashCommandBuilder()
  .setName(name)
  .setDescription(commands[name])
  .addStringOption((option) =>
    option
      .setName('question')
      .setDescription('Question Name')
      .setRequired(true)
      .setAutocomplete(true),
  );

export const execute = async (interaction: ChatInputCommandInteraction) => {
  const keyword = interaction.options.getString('question', true);
  const [question] = await getQuestionsByTerm(keyword);

  if (question === undefined) {
    await interaction.editReply(errors.questionNotFound);

    return;
  }

  const questionFormat = getQuestionFormat(question);

  await interaction.editReply(questionFormat);
};
