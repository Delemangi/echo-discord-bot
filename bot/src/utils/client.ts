import { GatewayIntentBits } from 'discord-api-types/v10';
import { Client } from 'discord.js';

const intents = [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.GuildMembers,
];

export const client = new Client({
  intents,
});
