const Discord = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();
const client = new Discord.Client();

client.on('ready',() => console.log('I am ready'));

client.on('message', (message) => {
    if(!message.author.bot){
        message.reply(`ECHO ${message.content}`);
    }
       
});

client.login(process.env.TOKEN)