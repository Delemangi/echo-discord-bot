import { getQuestionsByTerm } from '../data/questions.js';
import { commands } from '../translations/commands.js';
import { errors } from '../translations/errors.js';
import { getQuestionButtons, getQuestionText } from '../utils/questions.js';
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

  const messageContent = getQuestionText(question);
  const messageButtons = getQuestionButtons(question);

  await interaction.editReply({
    components: [messageButtons],
    content: messageContent,
  });
};
