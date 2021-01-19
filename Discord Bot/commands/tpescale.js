module.exports = {
    name: 'tpescale',
    description: "This command gets the league's tpe scale for you",
    execute(message, args){
        message.channel.send('55-65 - costs 1 TPE to go up 1 point \n65-70 - costs 2 TPE to go up 1 point \n70-80 - costs 5 TPE to go up 1 point \n80-90 - costs 10 TPE to go up 1 point \n90-99 - costs 15 TPE to go up 1 point');
    }
}