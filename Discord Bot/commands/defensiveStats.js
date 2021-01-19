module.exports = {
    name: "defensiveStats",
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
      "url": args._logo
    },
    "author": {
      "name": "Major League Defensive Stats",
      "icon_url": "https://cdn.discordapp.com/attachments/479046880391856159/738581773952352386/scfsl.png"
    },
    "fields": [
      {
        "name": "Tackles: "  ,
        "value": args._tackles,
        "inline": true
      },
      {
        "name": "Sacks:" ,
        "value": args._sacks,
        "inline": true
      },
      {
        "name": "Forced Fumbles:" ,
        "value": args._ffs,
        "inline": true
      },
      {
        "name": "Interceptions: ",
        "value": args._ints,
        "inline": true
      },
      {
        "name": "Knockdowns: " ,
        "value": args._pds,
        "inline": true
      },
      {
        "name": "Fumble Recoveries: " ,
        "value": args._frs,
        "inline": true
      },
      {
        "name": "\u200b" ,
        "value": "\u200b",
        "inline": true
      },
      {
        "name": "Touchdowns: ",
        "value": args._rtd,
        "inline": true
    },
    {
        "name": "\u200b" ,
        "value": "\u200b",
        "inline": true
      }
    ]
  };
  message.channel.send({ embed });
},
};