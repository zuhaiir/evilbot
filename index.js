const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', console.log('I am ready'));

client.on('message', (message) => {
    message.reply(`ECHO ${message.content}`);
});

client.login(process.env.token)