require('dotenv').config();

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('ready', () => {
    console.log('gyoboto online, yes, yes!');
});

client.on('messageCreate', async (message) => {
    console.log({ message });

    if (message.content === `!gyoboto hello`) {
        message.reply({
            content: 'greetings, yes, yes!',
        });
    } else if (message.content.toLowerCase() === `!gyoboto what is our goal?`) {
        message.reply({
            content: 'victory, yes, yes!',
        });
    } else if (message.content.toLowerCase() === `!gyoboto /kissy`) {
        message.reply({
            content: `_Your kissy smacks wetly on Gyoboto's perfectly smooth head_`,
        });
    } else if (message.content.toLowerCase() === `!gyoboto /dance`) {
        message.reply({
            content: `https://tenor.com/bRysr.gif`
        });
    }
});

client.login(process.env.DISCORD_BOT_ID);