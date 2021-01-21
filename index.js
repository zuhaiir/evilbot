const Discord = require('discord.js');
const dotenv = require('dotenv');
try {
    dotenv.config();
} catch (error) {
    //do nothing
}

const client = new Discord.Client();

let counter = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const insults = [
    "You dumbass",
    "You idiot",
    "Die",
    "Jump off a cliff",
    "You're so poor",
    "You're ugly",
    "Stinky",
    "Hey ugly"
]

client.on('ready',() => console.log('I am ready' || process.env.PORT));

client.on('message', (message) => {
    let randomint = getRandomInt(insults.length);
    if(!message.author.bot && (counter % 5 === 0)){
        message.reply(insults[randomint]);
    }
    counter++;   
});

client.login(process.env.TOKEN)
