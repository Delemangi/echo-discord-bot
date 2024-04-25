// eslint-disable-next-line import/no-unassigned-import
import 'dotenv/config';
import { getBotCredentials } from './config/environment.js';
import { client } from './utils/client.js';
import { registerCommands } from './utils/commands.js';
import { attachEventListeners } from './utils/events.js';

// Initialization

const { token, applicationId } = getBotCredentials();

await attachEventListeners();
await registerCommands(token, applicationId);

// Login

await client.login(token);
