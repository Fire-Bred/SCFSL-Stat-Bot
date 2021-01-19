module.exports = {
    name: "penaltyStats",
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
      "name": "Major League Penalty Stats",
      "icon_url": "https://cdn.discordapp.com/attachments/479046880391856159/738581773952352386/scfsl.png"
    },
    "fields": [
      {
        "name": "Penalties:"  ,
        "value": args._penalties,
        "inline": true
      },
      {
        "name": "Penalty Yards:" ,
        "value": args._penyards,
        "inline": true
      },
      {
        "name": "Average Yards/Penalty: " ,
        "value": Number(args._penyards/(args._penalties)).toFixed(2),
        "inline": true
      }
    ]
  };
  message.channel.send({ embed });
},
};