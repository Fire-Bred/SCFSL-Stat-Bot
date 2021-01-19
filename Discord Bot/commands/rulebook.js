module.exports = {
    name: 'rulebook',
    description: "This command grabs the league rulebook for you.",
    execute(message, args){
        message.channel.send('https://docs.google.com/document/d/1nDU_ZLC4SXXo8ZBSVbxGFP-WhuOOb0fAdtG8TJ1yBKQ/edit?usp=sharing');
    }
}