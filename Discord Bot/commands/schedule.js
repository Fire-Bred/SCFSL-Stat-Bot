module.exports = {
    name: 'schedule',
    description: "This command gets the league schedule url for you",
    execute(message, args){
        message.channel.send('https://docs.google.com/spreadsheets/u/1/d/1GeS8LcBPcjkBoGQrs88qK5RH1I0xHTbPQhwkYejLyHI/edit#gid=1077569649');
    }
}