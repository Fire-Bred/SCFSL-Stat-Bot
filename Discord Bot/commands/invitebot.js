module.exports = {
    name: 'invitebot',
    description: "This command provides the user with the invite link for the boy",
    execute(message, args){
        message.channel.send("https://discord.com/oauth2/authorize?client_id=738550678766747679&scope=bot&permissions=872803409")
        ;
    }
}