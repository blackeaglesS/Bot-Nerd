const { config } = require('dotenv');
// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
// Create a new client instance

config();

const client = new Client({ intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_VOICE_STATES
]});

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('messageCreate', async message => {
    if(!message.author.bot) await message.reply("HELLO");
});

// Login to Discord with your client's token
client.login(process.env.BOT_TOKEN);