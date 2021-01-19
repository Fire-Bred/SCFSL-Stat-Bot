module.exports = {
    name: "weeks",
    description: "This command grabs the matchups for the week for you",
    execute(message, args) {
        const embed = {
            "title": "Matchups:",
            "description": "\u200b",
            "color": 13938487,
            "footer": {
                "text": "This bot was created by Toasty using Javascript. If you are interested in a bot for your server DM Toasty#4562"
            },
            "thumbnail": {
                "url": "https://media.discordapp.net/attachments/479046880391856159/738581773952352386/scfsl.png?width=498&height=498"
            },
            "author": {
                "name": args._week,
                "icon_url": "https://cdn.discordapp.com/attachments/479046880391856159/738581773952352386/scfsl.png"
            },
            "fields": [
            {
                "name": args._game1,
                "value": "\u200b",
                "inline": true
            },
            {
                "name": args._game2,
                "value": "\u200b",
                "inline": true
            },
            {
                "name": args._game3,
                "value": "\u200b",
                "inline": true
            },
            {
                "name": args._game4,
                "value": "\u200b",
                "inline": true
            },
            {
                "name": args._game5,
                "value": "\u200b",
                "inline": true
            },
            {
                "name": args._game6,
                "value": "\u200b",
                "inline": true
            }]
        };
        message.channel.send({
            embed
        });
    },
};