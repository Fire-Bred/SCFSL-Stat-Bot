module.exports = {
    name: 'bank',
    description: "This command grabs the league bank link for you",
    execute(message, args){
        message.channel.send('https://docs.google.com/spreadsheets/d/1KL1okTuaqXN000rCy3hud0S7DQbiZS961hB5LfZqThk/edit?usp=sharing');
    }
}