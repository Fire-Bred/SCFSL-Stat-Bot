module.exports = {
    name: 'twitch',
    description: "This command gets the league's twitch url for you",
    execute(message, args){
        message.channel.send('https://www.twitch.tv/supercasualsimfootball');
    }
}