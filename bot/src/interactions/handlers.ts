import { errors } from '../translations/errors.js';
import { labels } from '../translations/labels.js';
import { getCommand } from '../utils/commands.js';
import { logger } from '../utils/logger.js';
import { handleFaqAutocomplete } from './questions.js';
import {
  type AutocompleteInteraction,
  type ChatInputCommandInteraction,
} from 'discord.js';

export const handleChatInputCommand = async (
  interaction: ChatInputCommandInteraction,
) => {
  try {
    await interaction.deferReply();
  } catch {
    await interaction.reply(errors.commandError);

    return;
  }

  const command = await getCommand(interaction.commandName);

  logger.info(
    `[${labels.chat}] ${interaction.user.tag}: ${interaction} [${
      interaction.channel === null || interaction.channel.isDMBased()
        ? labels.dm
        : labels.guild
    }]`,
  );

  if (command === undefined) {
    await interaction.editReply(errors.commandError);

    return;
  }

  try {
    await command.execute(interaction);
  } catch {
    await interaction.editReply(errors.commandError);

    logger.error(errors.commandExecutionFailed(interaction.commandName));
  }
};

const autocompleteHandlers: Record<
  string,
  (argument: AutocompleteInteraction) => Promise<void>
> = {
  question: handleFaqAutocomplete,
};

export const handleAutocompleteCommand = async (
  interaction: AutocompleteInteraction,
) => {
  const option = interaction.options.getFocused(true);

  logger.info(
    `[${labels.autocomplete}] ${interaction.user.tag}: ${option.name} [${
      interaction.channel === null || interaction.channel.isDMBased()
        ? labels.dm
        : labels.guild
    }]`,
  );

  await autocompleteHandlers[option.name]?.(interaction);
};
