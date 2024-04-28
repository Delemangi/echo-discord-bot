import { getAllQuestions } from '../data/questions.js';
import { commands } from '../translations/commands.js';
import {
  type ChatInputCommandInteraction,
  SlashCommandBuilder,
} from 'discord.js';

const name = 'list';

export const data = new SlashCommandBuilder()
  .setName(name)
  .setDescription(commands[name]);

export const execute = async (interaction: ChatInputCommandInteraction) => {
  const questions = await getAllQuestions();

  const messageContent = questions
    .map((question, index) => `${index + 1}. ${question.name}`)
    .join('\n');

  await interaction.editReply(messageContent);
};
