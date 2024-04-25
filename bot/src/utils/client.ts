import { Client } from 'discord.js';
import { GatewayIntentBits } from 'discord-api-types/v10';

const intents = [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.GuildMembers,
];

export const client = new Client({
  intents,
});
