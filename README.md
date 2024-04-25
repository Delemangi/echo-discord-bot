# Echo Discord Bot

Echo Discord Bot is a Discord bot that provides FAQ functionality. It's powered by [discord.js](https://github.com/discordjs/discord.js) v14 and Strapi v4.

It's recommended to run this application in a DOcker environment if you wish to retain your sanity.

## Installation

For development purposes, be sure to run `npm run prepare` to install the Git pre-commit hooks.

### Installation (Docker)

The project is available as a Docker image on DockerHub as `delemangi/echo-discord-bot`.

Using the provided production Docker Compose setup:

1. Download the `docker-compose.prod.yaml` from the repository, put it in a folder and rename it to `docker-compose.yaml`
2. Pull the images: `docker compose pull`

Using the repository:

1. Clone the repository: `git clone git@github.com:Delemangi/finki-discord-bot.git`
2. Build the images: `docker compose build`

### Installation (Normal)

1. Clone the repository: `git clone git@github.com:Delemangi/finki-discord-bot.git`
2. Install the dependencies: `npm i`
3. Build the project: `npm run build`

## Running

### Running (Docker)

Regardless of the Docker steps you have followed above for installation, run `docker compose up`

### Running (Normal)

`npm run start`

## Configuration

Copy the `env.example` file in the project root, rename it to `.env` and edit the environment variables inside.

## License

This project is licensed under the MIT license.
