import { type ClientEvents } from 'discord.js';
import { readdirSync } from 'node:fs';

import { type ClientEvent } from '../types/ClientEvent.js';
import { client } from './client.js';

export const attachEventListeners = async () => {
  const eventFiles = readdirSync('./dist/events').filter((file) =>
    file.endsWith('.js'),
  );

  for (const file of eventFiles) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const event: ClientEvent<keyof ClientEvents> = await import(
      `../events/${file}`
    );

    if (event.once) {
      client.once(event.name, (...args) => event.execute(...args));
    } else {
      client.on(event.name, (...args) => event.execute(...args));
    }
  }
};
