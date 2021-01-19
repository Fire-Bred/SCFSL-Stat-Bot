module.exports = {
    name: 'create',
    description: "This command grabs the link to create a player",
    execute(message, args){
        message.channel.send('https://forms.gle/DQHWCoQTAdSVaqsd7');
    }
}