module.exports = {
    name: 'playername',
    description: "This command sets your player name for you",
    eexecute(message, args){
        const Discord = require('discord.js');

const client = new Discord.Client();

const {MessageEmbed} = require('discord.js')

const prefix = 's!'

const fs = require('fs');
 
client.commands = new Discord.Collection();

client.players = require ("./commands/stats/players.json")

editedmessage = message.content.slice(19);
        client.blocking [message.author.id] = {
            player: editedmessage
        }
        fs.writeFile ("./commands/stats/players.json", JSON.stringify (client.playernames, null, 4));
        message.channel.send('Written')
    }
}