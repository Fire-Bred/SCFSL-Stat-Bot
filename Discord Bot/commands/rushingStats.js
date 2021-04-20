module.exports = {
    name: "rushingStats",
    description: "This command gets a player's stats for you",
    execute(message, args) {
        const embed = {
            "title": args._regclass +" "+ args._pos + " - " + args._name + " - " + args._team,
            "description": "TPE Spent: " + args._tpe,
            "color": args._color,
            "footer": {
              "text": "This bot was created by Toasty using Javascript. If you are interested in a bot for your server DM Toasty#4562"
            },
            "thumbnail": {
              "url": args._pfp
            },
            "author": {
              "name": "Major League Rushing Stats",
              "icon_url": "https://cdn.discordapp.com/attachments/479046880391856159/738581773952352386/scfsl.png"
            },
            "fields": [
              {
                "name": "Rushing Attempts: "  ,
                "value": args._ratt,
                "inline": true
              },
              {
                "name": "Rushing Yards: " ,
                "value": args._rushyards,
                "inline": true
              },
              {
                "name": "Yards Per Attempt: " ,
                "value": Number(args._rushyards/args._ratt).toFixed(2),
                "inline": true
              },
              {
                "name": "Long: ",
                "value": args._rushlong,
                "inline": true
              },
              {
                "name": "Touchdowns: " ,
                "value": args._rtd,
                "inline": true
              },
              {
                "name": "Fumbles: " ,
                "value": args._fumbles,
                "inline": true
            }
            ]
          };
          message.channel.send({ embed });
        },
    };