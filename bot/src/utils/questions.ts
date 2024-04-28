import { type Question } from '../schemas/QuestionSchema.js';
import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';

export const getQuestionText = (question: Question) => {
  return `
  __## ${question.name}__

  ${question.content}
  `;
};

export const getQuestionButtons = (question: Question) => {
  const row = new ActionRowBuilder<ButtonBuilder>();

  if (question.links === null) {
    return row;
  }

  for (const [label, url] of Object.entries(question.links)) {
    const button = new ButtonBuilder()
      .setStyle(ButtonStyle.Link)
      .setEmoji('🔗')
      .setLabel(label)
      .setURL(url);

    row.addComponents(button);
  }

  return row;
};
