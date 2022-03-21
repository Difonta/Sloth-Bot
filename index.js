// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();
// Create a new client instance
const client = new Client({ intents:  [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// When the client is ready, run this code (only once)
client.on('ready', () => {
    console.log('Ready!');
    
});

client.on('messageCreate', (message) => {
    if (message.content === 'ping') {
        message.reply({
            content: '0ms'
        })
    }
});


    
// Login to Discord with your client's token
client.login(process.env.TOKEN);