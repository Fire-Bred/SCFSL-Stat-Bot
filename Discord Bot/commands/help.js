const {Client, MessageEmbed} = require('discord.js')
const { execute } = require('./schedule');
module.exports={
    name: 'Help Embed',
    category: 'help',
    timeout: 1,
    description: 'View help message',
    execute(message, args){
        run: async(client,message,args)=>{
            const embed = new MessageEmbed()
                .setTitle('SCSFL Bot')
                .setColor('#000000')
                .setURL("https://discord.com/oauth2/authorize?client_id=738550678766747679&scope=bot&permissions=872803409")
                .setAuthor("Toasty#4562","https://media.discordapp.net/attachments/550012964959158284/738666129223974942/image0.jpg?width=643&height=361","")
                .setDescription("Help Commands. *All start with s!")
                .setThumbnail("https://media.discordapp.net/attachments/550012964959158284/738666129223974942/image0.jpg?width=643&height=361")
                .addFields(
                    {name: 'ac',value: 'Provides the AC link',inline: true},
                    {name: 'bank',value: 'Provides the Bank link', inline: true},
                    {name: 'create',value: 'Provides the create a player link', inline: true},
                    {name: 'ping',value: 'Check to see if the bot is online', inline: true},
                    {name: 'rulebook',value: 'Provides the league rulebook link', inline: true},
                    {name: 'schedule',value: 'Provides the schedule link',inline: true},
                    {name: 'tpescale',value: 'Provides the TPE scale',inline: true},
                    {name: 'twitch',value: 'Provides the twitch link',inline: true},
                    {name: 'youtube',value: 'Provides the youtube link',inline: true},
                )
                .setImage("https://media.discordapp.net/attachments/550012964959158284/738666129223974942/image0.jpg?width=643&height=361")
                .setTimestamp()
                .setFooter('Created by Toasty')
                message.channel.send(embed);
                }
    }
}