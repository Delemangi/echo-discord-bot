import { type Awaitable, type ClientEvents } from 'discord.js';

export type ClientEvent<T extends keyof ClientEvents> = {
  execute: (...args: ClientEvents[T]) => Awaitable<void>;
  name: T;
  once?: boolean;
};
