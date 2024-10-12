import { getBotCredentials } from './config/environment.js';
import { client } from './utils/client.js';
import { registerCommands } from './utils/commands.js';
import { attachEventListeners } from './utils/events.js';
// eslint-disable-next-line import/no-unassigned-import
import 'dotenv/config';

// Initialization

const { applicationId, token } = getBotCredentials();

await attachEventListeners();
await registerCommands(token, applicationId);

// Login

await client.login(token);
