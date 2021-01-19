module.exports = {
    name: "attributes",
    description: "This command gets a player's attributes for you",
    execute(message, args) {
const embed = {
    "title": args._regclass +" "+ args._pos + " - " + "#" + args._number + " - " + args._name + " - " + args._team,
    "description": "TPE Spent: " + args._tpe +'\n'+"Depth Chart Position: " +args._dcp,
    "color": args._color,
    "footer": {
      "text": "This bot was created by Toasty using Javascript. If you are interested in a bot for your server DM Toasty#4562"
    },
    "thumbnail": {
      "url": args._logo
    },
    "author": {
      "name": "Attributes",
      "icon_url": "https://cdn.discordapp.com/attachments/479046880391856159/738581773952352386/scfsl.png"
    },
    "fields": [
      {
        "name": "Speed:"  ,
        "value": args._spd,
        "inline": true
      },
      {
        "name": "Tackle Break:" ,
        "value": args._tb,
        "inline": true
      },
      {
        "name": "Catch:" ,
        "value": args._catch,
        "inline": true
      },
      {
        "name": "Blocking:",
        "value": args._blk,
        "inline": true
      },
      {
        "name": "Fumble:",
        "value": args._fum,
        "inline": true
      },
      {
        "name": "Agilty:",
        "value": args._agl,
        "inline": true
      },
      {
        "name": "Throw Accuracy:",
        "value": args._tacc,
        "inline": true
      },
      {
        "name": "Throw Power:",
        "value": args._tpwr,
        "inline": true
      },
      {
        "name": "Awareness:",
        "value": args._aware,
        "inline": true
      },
      {
        "name": "Break Block:",
        "value": args._bb,
        "inline": true
      },
      {
        "name": "Tackle:",
        "value": args._tkl,
        "inline": true
      },
      {
        "name": "Cover:",
        "value": args._cover,
        "inline": true
      },
      {
        "name": "Hit Power:",
        "value": args._hpwr,
        "inline": true
      },
      {
        "name": "Kick Accuracy:",
        "value": args._kacc,
        "inline": true
      },
      {
        "name": "Kick Power:",
        "value": args._kpwr,
        "inline": true
      },
      {
        "name": "Endurance:",
        "value": args._end,
        "inline": true
      },
      {
        "name": "\u200b",
        "value": "\u200b",
        "inline": true
      },
      {
        "name": "Discipline:",
        "value": args._dis,
        "inline": true
      }
    ]
  };
  message.channel.send({ embed });
    },
};


