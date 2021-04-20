module.exports = {
    name: "kickingStats",
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
      "name": "Major League Kicking Stats",
      "icon_url": "https://cdn.discordapp.com/attachments/479046880391856159/738581773952352386/scfsl.png"
    },
    "fields": [
      {
        "name": "XPM:"  ,
        "value": args._xpm,
        "inline": true
      },
      {
        "name": "XPA:" ,
        "value": args._xpa,
        "inline": true
      },
      {
        "name": "XP%:" ,
        "value": Number(args._xpm/(args._xpa)*100).toFixed(2)+"%",
        "inline": true
      },
      {
        "name": "FGM:",
        "value": args._fgm,
        "inline": true
      },
      {
        "name": "FGA: " ,
        "value": args._fga,
        "inline": true
      },
      {
        "name": "FG%:" ,
        "value": Number(args._fgm/(args._fga)*100).toFixed(2)+"%",
        "inline": true
      },
      {
        "name": "Punts:" ,
        "value": args._punts,
        "inline": true
      },
      {
        "name": "Punt Yards: ",
        "value": args._puntyards,
        "inline": true
    },
    {
        "name": "Average Yards/Punt: " ,
        "value": Number(args._puntyards/args._punts).toFixed(2),
        "inline": true
      },
      {
        "name": "Punt Touchbacks: " ,
        "value": args._ptbs,
        "inline": true
      },
      {
        "name": "\u200b",
        "value": "\u200b",
        "inline": true
      },
      {
        "name": "Punts in 20: " ,
        "value": args._pi20,
        "inline": true
      }
    ]
  };
  message.channel.send({ embed });
},
};