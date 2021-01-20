const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', console.log('I am ready'));

client.on('message', (message) => {
    message.reply(`ECHO ${message.content}`);
});

client.login('Njk2MzY1MTA5ODE1MTQ4NjU2.XonqjA.fDBMo54LJUJcE9kpGS_HlGLRNSI')