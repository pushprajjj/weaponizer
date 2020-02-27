var Discord = require('discord.js');
var botName = require('./package.json');
var bot = new Discord.Client();

bot.on('message', message =>{

    // Variables
    var sender = message.author; //The person who sent the message
    var msg = message.content;
    var prefix = ">" //The text before commands, you can put anything that you prefer

    if(message.author.id != "682545444852989974" && message.channel.id === "682237400709070880"){
        if(msg.startsWith('.', 0)){
            if(msg === prefix + "Wep" && message.channel.id === "682237400709070880"){
                message.channel.send('WeaponizerYT is here buddy!') // Sends a message to the channel, with the content
            }
            else{
                message.channel.send(sender + " Hey, I am a infant now. I will be adult when my creator @WeaponizerYT will be free for teach me. Currently i am enjoing here by reading your chat ")
            }
        }
        else{
            message.delete();
            message.channel.send(sender + " this bot only accepts commands which starts with . (dot).");
        }
    }
});

bot.login(process.env.BOT_TOKEN)
