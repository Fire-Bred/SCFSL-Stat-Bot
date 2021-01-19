module.exports={
    name: "help",
    description: "This command gets a player's stats for you",
    execute(message, args) {
        const embed = {
            "title": "Invite me to your Server",
            "description": "Help commands. All commands start with s!",
            "url": "https://discord.com/oauth2/authorize?client_id=738550678766747679&scope=bot&permissions=872803409",
            "color": 13938487,
            "footer": {
              "text": "This bot was created by Toasty using Javascript. If you are interested in a bot for your server DM Toasty#4562"
            },
            "thumbnail": {
              "url": "https://media.discordapp.net/attachments/479046880391856159/738581773952352386/scfsl.png?width=498&height=498"
            },
            "author": {
              "name": "SCFSL Stat Bot",
              "icon_url": "https://cdn.discordapp.com/attachments/479046880391856159/738581773952352386/scfsl.png"
            },
            "fields": [
              {
                "name": "AC",
                "value": "Provides the Activity Check link",
                "inline": true
              },
              {
                "name": "Bank",
                "value": "Provides the Bank link",
                "inline": true
              },
              {
                "name": "Check Player",
                "value": "Displays the last saved player",
                "inline": true
              },
              {
                "name": "Create",
                "value": "Provides the create a player link",
                "inline": true
              },
              {
                "name": "InviteBot ",
                "value": "Provides you with the link to invite the bot",
                "inline": true
              },
              {
                "name": "mstats",
                "value": "Displays your players stats. For Minors",
                "inline": true
              },
              {
                "name": "Ping",
                "value": "Checks to see if the bot is online",
                "inline": true
              },
              {
                "name": "Rulebook",
                "value": "Provides the link to the rulebook",
                "inline": true
              },
              {
                "name": "Schedule",
                "value": "Provides the Schedule Link",
                "inline": true
              },
              {
                "name": "Stats",
                "value": "Displays your player stats. For Major league",
                "inline": true
              },
              {
                "name": "Set Player <Player Name>",
                "value": "Sets player name for automatic stats",
                "inline": true
              },
              {
                "name": "TPEScale",
                "value": "Displays the TPE scale",
                "inline": true
              },
              {
                "name": "Twitch",
                "value": "Provides the link to the league Twitch",
                "inline": true
              },
              {
                "name": "Week <number>",
                "value": "Displays the matchups for that week",
                "inline": true
              },
              {
                "name": "Youtube",
                "value": "Provides the link to the league YouTube",
                "inline": true
              }
            ]
          };
          message.channel.send({ embed });    
        },
    };