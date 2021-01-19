module.exports = {
    name: 'youtube',
    description: "This command gets the league's youtube url for you",
    execute(message, args){
        message.channel.send('https://www.youtube.com/channel/UCO-nSj-CTd1BrKE8Oh6Umbg/');
    }
}