module.exports = {
    name: "receivingStats",
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
                  "name": "Major League Receiving Stats",
                  "icon_url": "https://cdn.discordapp.com/attachments/479046880391856159/738581773952352386/scfsl.png"
                },
                "fields": [
                  {
                    "name": "Catches"  ,
                    "value": args._catch,
                    "inline": true
                  },
                  {
                    "name": "Receiving Yards: " ,
                    "value": args._reyards,
                    "inline": true
                  },
                  {
                    "name": "Yards Per Catch: " ,
                    "value": Number(args._reyards/args._catch).toFixed(2),
                    "inline": true
                  },
                  {
                    "name": "Touchdowns: ",
                    "value": args._rtd,
                    "inline": true
                  },
                  {
                    "name": "Drops: " ,
                    "value": args._drops,
                    "inline": true
                  },
                  {
                    "name": "Drop %: " ,
                    "value": Number(args._drops/(args._catch+args._drops)*100).toFixed(2)+"%",
                    "inline": true
                  },
                  {
                    "name": "Targets: ",
                    "value": args._targets,
                    "inline": true
                },
                {
                  "name": "Long: ",
                  "value": args._relong,
                  "inline": true
                },
                {
                  "name": "Fumbles: ",
                  "value": args._fumbles,
                  "inline": true
                }
                ]
              };
              message.channel.send({ embed });
            },
        };