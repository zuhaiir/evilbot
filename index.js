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
    "Hey ugly",
    "Do you realize that people just tolerate you?",
    "You’re not pretty enough to be this stupid.",
    "If I wanted to kill myself, I’d climb to your ego and jump to your IQ.",
    "What doesn’t kill you… disappoints me.",
    "Your asshole must be so jealous of your mouth from all the shit it’s been spewing.",
    "Somewhere out there, a tree is tirelessly producing oxygen for you.  I think you owe it an apology.",
    "It's better to let someone think you are an idiot than to open your mouth and prove it."
    "Are you always this stupid or is today a special occasion?"
    "As an outsider, what do you think of the human race?"
    "Don't you have a terribly empty feeling - in your skull?"
    "Keep talking, someday you'll say something intelligent!"
    "I’d give you a nasty look but you’ve already got one."
    "You should really come with a warning label."
    "You’re a grey sprinkle on a rainbow cupcake."
    "Hi"
    "I am returning your nose. I found it in my business."
    "Earth is full. Go home."
    "Who ate your bowl of sunshine this morning, thundercloud?"
    "You’re about as useful as an ashtray on a motorcycle."
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
