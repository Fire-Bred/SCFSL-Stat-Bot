const { error } = require('console');
const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
const result = require('dotenv').config();

const {MessageEmbed} = require('discord.js')

const prefix = 's!'

const repeating = require('repeating');
 
client.commands = new Discord.Collection();

client.playernames = require ("./stats/players.json")

client.teamcolors = require ("./stats/colors.json")

client.stats = require ("./stats/stats.json")

client.mstats = require ("./stats/mstats.json")

client.attributes = require ("./stats/attributes.json")

client.standings = require ("./stats/standings.json")

client.schedule = require ("./stats/schedule.json")

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('SCSFL Stats Bot is online and updated!');
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: 's!help to learn commands',
            type: "STREAMING",
            url: "https://www.twitch.tv/supercasualsimfootball"
        }
    });

});

client.on('message', message =>{

    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    
    
    } else if (command == 'twitch'){
        client.commands.get('twitch').execute(message, args);
    
    
    } else if (command == 'youtube'){
        client.commands.get('youtube').execute(message, args);
    
    
    } else if (command == 'schedule'){
        client.commands.get('schedule').execute(message, args);
    
    
    } else if (command == 'ac'){
        client.commands.get('ac').execute(message, args);
    
    
    } else if (command == 'create'){
        client.commands.get('create').execute(message, args);
    
    
    } else if (command == 'rulebook'){
        client.commands.get('rulebook').execute(message, args);
    
    
    } else if (command == 'bank'){
        client.commands.get('bank').execute(message, args);
    
    
    } else if (command == 'tpescale'){
        client.commands.get('tpescale').execute(message, args);
    
    
    } else if (command == 'allweather'){
        client.commands.get('weather').execute(message, args);
        client.commands.get('wind').execute(message, args);
    
    
    } else if (message.content.startsWith('s!set player')){
        editedmessage = message.content.slice(13);
        client.playernames [message.author.id] = {
            player: editedmessage
        }
        fs.writeFile ("./stats/players.json", JSON.stringify (client.playernames, null, 4), err => {
            if (err) throw err;
            message.channel.send("Written as " + editedmessage);
        });

    
    
    } else if (message.content.startsWith('s!check player')) {
        let _message = client.playernames[message.author.id].player;
        message.channel.send('Player Name is: ' + _message);
    
    
    } else if (message.content.startsWith('s!stats')){
        const args1 = message.content.slice(8).split();
        const command1 = args1.shift().toLowerCase();
        editedmessage = command1
        if (editedmessage == ""){
            if(client.playernames[message.author.id] == undefined){
                message.channel.send('I could not find your player. Please use "s!set player" to set up automatic stats i.e. s!set player Willie B. Hardagain')
            } else{
                let _message = client.playernames[message.author.id].player;
                args2 = _message
                const command2 = args2.toLowerCase();
                editedmessage = command2
            }
            
        }
        if(client.stats[editedmessage] == undefined){
            message.channel.send(editedmessage + ' is not in the statabase. If you believe he should be DM Toasty.')
        } else {
       let _name = client.stats[editedmessage].Name;
       let _regclass = client.stats[editedmessage].RegressionClass;
       let _team = client.stats[editedmessage].Team;
       let _pos = client.stats[editedmessage].Position;
       let _tpe = client.stats[editedmessage].TPESpent;
       let _pcomp = client.stats[editedmessage].QBCompletions;
       let _patt = client.stats[editedmessage].QBAttempts;
       let _pyards = client.stats[editedmessage].QBPassYards;
       let _ptds = client.stats[editedmessage].QBPassTDs;
       let _pints = client.stats[editedmessage].QBInts;
       let _plong = client.stats[editedmessage].QBLongestPass;
       let _ratt = client.stats[editedmessage].RushAttempts;
       let _rushyards = client.stats[editedmessage].RushYards;
       let _rushlong = client.stats[editedmessage].LongestRush;
       let _catch = client.stats[editedmessage].Receptions;
       let _reyards = client.stats[editedmessage].ReceivingYards;
       let _drops = client.stats[editedmessage].Drops;
       let _fumbles = client.stats[editedmessage].Fumbles;
       let _targets = client.stats[editedmessage].Targets;
       let _relong = client.stats[editedmessage].LongestReception;
       let _rtd = client.stats[editedmessage].Touchdowns;
       let _tackles = client.stats[editedmessage].Tackles;
       let _sacks = client.stats[editedmessage].Sacks;
       let _ints = client.stats[editedmessage].Interceptions;
       let _pds = client.stats[editedmessage].KnockDowns;
       let _ffs = client.stats[editedmessage].ForcedFumbles;
       let _frs = client.stats[editedmessage].FumbleRecoveries;
       let _penalties = client.stats[editedmessage].Penalties;
       let _penyards = client.stats[editedmessage].PenaltyYards;
       let _fgm = client.stats[editedmessage].FGMade;
       let _fga = client.stats[editedmessage].FGAttempted;
       let _xpm = client.stats[editedmessage].XPMade;
       let _xpa = client.stats[editedmessage].XPAttempted;
       let _punts = client.stats[editedmessage].Punts;
       let _pi20 = client.stats[editedmessage].PuntsInside20;
       let _ptbs = client.stats[editedmessage].PuntTouchbacks;
       let _puntyards = client.stats[editedmessage].PuntYards;
       let _qbsacks = client.stats[editedmessage].QBSacks;
       let _qbdrops = client.stats[editedmessage].QBDrops;
       let _A = ((_pcomp/_patt)-0.3)*5
       let _B = ((_pyards/_patt)-3)*0.25
       let _C = (_ptds/_patt)*20
       let _D = 2.375-((_pints/_patt)*25)
       let _prating = ((_A+_B+_C+_D)/6)*100
       let _anya = ((_pyards +(_ptds*20)-(_pints*45)-(_qbsacks*5))/(_patt + _qbsacks))
       const _team1 = _team.toLowerCase()
       if(client.teamcolors[_team1] == undefined){
           var _color = 13938487
           var _logo = "https://cdn.discordapp.com/attachments/479046880391856159/738581773952352386/scfsl.png"
       }else {
           var _color = client.teamcolors[_team1].Color;
           var _logo = client.teamcolors[_team1].Logo;  
       }
       if(_name == ""){
            message.channel.send("If you believe you have already done this DM Toasty")
       }

       if(_patt > 0){
        const args = {
          _regclass,
          _pos,
          _name,
          _team,
          _tpe,
          _color,
          _logo,
          _pcomp,
          _patt,
          completionPercentage: Number((_pcomp / _patt) * 100).toFixed(2) + "%",
          _pyards,
          _ptds,
          _pints,
          passerRating: Number(_prating).toFixed(2),
          anya: Number(_anya).toFixed(3),
          _plong,
          _qbsacks,
          _qbdrops,
          sackPercentage:
            Number((_qbsacks / (_qbsacks + _patt)) * 100).toFixed(2) + "%",
          dropPercentage: Number((_qbdrops / _patt) * 100).toFixed(2) + "%",
        };
        client.commands.get("passingStats").execute(message, args);
       } if(_ratt > 0){
        const args = {
          _regclass,
          _pos,
          _name,
          _team,
          _tpe,
          _color,
          _logo,
          _ratt,
          _rushyards,
          _rushlong,
          _rtd,
          _fumbles,
        }
        client.commands.get("rushingStats").execute(message, args);
        } if(_targets > 0){
            const embed = {
                "title": _regclass +" "+ _pos + " - " + _name + " - " + _team,
                "description": "TPE Spent: " + _tpe,
                "color": _color,
                "footer": {
                  "text": "This bot was created by Toasty using Javascript. If you are interested in a bot for your server DM Toasty#4562"
                },
                "thumbnail": {
                  "url": _logo
                },
                "author": {
                  "name": "Major League Receiving Stats",
                  "icon_url": "https://cdn.discordapp.com/attachments/479046880391856159/738581773952352386/scfsl.png"
                },
                "fields": [
                  {
                    "name": "Catches"  ,
                    "value": _catch,
                    "inline": true
                  },
                  {
                    "name": "Receiving Yards: " ,
                    "value": _reyards,
                    "inline": true
                  },
                  {
                    "name": "Yards Per Catch: " ,
                    "value": Number(_reyards/_catch).toFixed(2),
                    "inline": true
                  },
                  {
                    "name": "Touchdowns: ",
                    "value": _rtd,
                    "inline": true
                  },
                  {
                    "name": "Drops: " ,
                    "value": _drops,
                    "inline": true
                  },
                  {
                    "name": "Drop %: " ,
                    "value": Number(_drops/(_catch+_drops)*100).toFixed(2)+"%",
                    "inline": true
                  },
                  {
                    "name": "Targets: ",
                    "value": _targets,
                    "inline": true
                },
                {
                  "name": "Long: ",
                  "value": _relong,
                  "inline": true
                },
                {
                  "name": "Fumbles: ",
                  "value": _fumbles,
                  "inline": true
                }
                ]
              };
              message.channel.send({ embed });
        } if(_tackles+_sacks+_pds+_ints+_frs+_ffs > 0){
            const embed = {
                "title": _regclass +" "+ _pos + " - " + _name + " - " + _team,
                "description": "TPE Spent: " + _tpe,
                "color": _color,
                "footer": {
                  "text": "This bot was created by Toasty using Javascript. If you are interested in a bot for your server DM Toasty#4562"
                },
                "thumbnail": {
                  "url": _logo
                },
                "author": {
                  "name": "Major League Defensive Stats",
                  "icon_url": "https://cdn.discordapp.com/attachments/479046880391856159/738581773952352386/scfsl.png"
                },
                "fields": [
                  {
                    "name": "Tackles: "  ,
                    "value": _tackles,
                    "inline": true
                  },
                  {
                    "name": "Sacks:" ,
                    "value": _sacks,
                    "inline": true
                  },
                  {
                    "name": "Forced Fumbles:" ,
                    "value": _ffs,
                    "inline": true
                  },
                  {
                    "name": "Interceptions: ",
                    "value": _ints,
                    "inline": true
                  },
                  {
                    "name": "Knockdowns: " ,
                    "value": _pds,
                    "inline": true
                  },
                  {
                    "name": "Fumble Recoveries: " ,
                    "value": _frs,
                    "inline": true
                  },
                  {
                    "name": "\u200b" ,
                    "value": "\u200b",
                    "inline": true
                  },
                  {
                    "name": "Touchdowns: ",
                    "value": _rtd,
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
        } if(_xpa + _fga > 0){
            const embed = {
                "title": _regclass +" "+ _pos + " - " + _name + " - " + _team,
                "description": "TPE Spent: " + _tpe,
                "color": _color,
                "footer": {
                  "text": "This bot was created by Toasty using Javascript. If you are interested in a bot for your server DM Toasty#4562"
                },
                "thumbnail": {
                  "url": _logo
                },
                "author": {
                  "name": "Major League Kicking Stats",
                  "icon_url": "https://cdn.discordapp.com/attachments/479046880391856159/738581773952352386/scfsl.png"
                },
                "fields": [
                  {
                    "name": "XPM:"  ,
                    "value": _xpm,
                    "inline": true
                  },
                  {
                    "name": "XPA:" ,
                    "value": _xpa,
                    "inline": true
                  },
                  {
                    "name": "XP%:" ,
                    "value": Number(_xpm/(_xpa)*100).toFixed(2)+"%",
                    "inline": true
                  },
                  {
                    "name": "FGM:",
                    "value": _fgm,
                    "inline": true
                  },
                  {
                    "name": "FGA: " ,
                    "value": _fga,
                    "inline": true
                  },
                  {
                    "name": "FG%:" ,
                    "value": Number(_fgm/(_fga)*100).toFixed(2)+"%",
                    "inline": true
                  },
                  {
                    "name": "Punts:" ,
                    "value": _punts,
                    "inline": true
                  },
                  {
                    "name": "Punt Yards: ",
                    "value": _puntyards,
                    "inline": true
                },
                {
                    "name": "Average Yards/Punt: " ,
                    "value": Number(_puntyards/_punts).toFixed(2),
                    "inline": true
                  },
                  {
                    "name": "Punt Touchbacks: " ,
                    "value": _ptbs,
                    "inline": true
                  },
                  {
                    "name": "\u200b",
                    "value": "\u200b",
                    "inline": true
                  },
                  {
                    "name": "Punts in 20: " ,
                    "value": _pi20,
                    "inline": true
                  }
                ]
              };
              message.channel.send({ embed });
        } if(_penalties > 0){
            const embed = {
                "title": _regclass +" "+ _pos + " - " + _name + " - " + _team,
                "description": "TPE Spent: " + _tpe,
                "color": _color,
                "footer": {
                  "text": "This bot was created by Toasty using Javascript. If you are interested in a bot for your server DM Toasty#4562"
                },
                "thumbnail": {
                  "url": _logo
                },
                "author": {
                  "name": "Major League Penalty Stats",
                  "icon_url": "https://cdn.discordapp.com/attachments/479046880391856159/738581773952352386/scfsl.png"
                },
                "fields": [
                  {
                    "name": "Penalties:"  ,
                    "value": _penalties,
                    "inline": true
                  },
                  {
                    "name": "Penalty Yards:" ,
                    "value": _penyards,
                    "inline": true
                  },
                  {
                    "name": "Average Yards/Penalty: " ,
                    "value": Number(_penyards/(_penalties)).toFixed(2),
                    "inline": true
                  }
                ]
              };
              message.channel.send({ embed });
        }
    }
} else if(message.content.startsWith('s!champ')){
  message.channel.send("https://tenor.com/zw3L.gif")
} else if (message.content.startsWith('s!mchamp')){
  message.channel.send("https://tenor.com/xrpO.gif")
} else if (message.content.startsWith('s!mstats')){
    const args1 = message.content.slice(9).split();
    const command1 = args1.shift().toLowerCase();
    editedmessage = command1
    if (editedmessage == ""){
        if(client.playernames[message.author.id] == undefined){
            message.channel.send('I could not find your player. Please use "s!set player" to set up automatic stats i.e. s!set player Willie B. Hardagain')
        } else{
            let _message = client.playernames[message.author.id].player;
            args2 = _message
            const command2 = args2.toLowerCase();
            editedmessage = command2
        }
    }
    if(client.mstats[editedmessage] == undefined){
        message.channel.send(editedmessage + ' is not in the statabase. If you believe he should be DM Toasty.')
    } else {
   let _name = client.mstats[editedmessage].Name;
   let _regclass = client.mstats[editedmessage].RegressionClass;
   let _team = client.mstats[editedmessage].Team;
   let _pos = client.mstats[editedmessage].Position;
   let _tpe = client.mstats[editedmessage].TPESpent;
   let _pcomp = client.mstats[editedmessage].QBCompletions;
   let _patt = client.mstats[editedmessage].QBAttempts;
   let _pyards = client.mstats[editedmessage].QBPassYards;
   let _ptds = client.mstats[editedmessage].QBPassTDs;
   let _pints = client.mstats[editedmessage].QBInts;
   let _plong = client.mstats[editedmessage].QBLongestPass;
   let _ratt = client.mstats[editedmessage].RushAttempts;
   let _rushyards = client.mstats[editedmessage].RushYards;
   let _rushlong = client.mstats[editedmessage].LongestRush;
   let _catch = client.mstats[editedmessage].Receptions;
   let _reyards = client.mstats[editedmessage].ReceivingYards;
   let _drops = client.mstats[editedmessage].Drops;
   let _fumbles = client.mstats[editedmessage].Fumbles;
   let _targets = client.mstats[editedmessage].Targets;
   let _relong = client.mstats[editedmessage].LongestReception;
   let _rtd = client.mstats[editedmessage].Touchdowns;
   let _tackles = client.mstats[editedmessage].Tackles;
   let _sacks = client.mstats[editedmessage].Sacks;
   let _ints = client.mstats[editedmessage].Interceptions;
   let _pds = client.mstats[editedmessage].KnockDowns;
   let _ffs = client.mstats[editedmessage].ForcedFumbles;
   let _frs = client.mstats[editedmessage].FumbleRecoveries;
   let _penalties = client.mstats[editedmessage].Penalties;
   let _penyards = client.mstats[editedmessage].PenaltyYards;
   let _fgm = client.mstats[editedmessage].FGMade;
   let _fga = client.mstats[editedmessage].FGAttempted;
   let _xpm = client.mstats[editedmessage].XPMade;
   let _xpa = client.mstats[editedmessage].XPAttempted;
   let _punts = client.mstats[editedmessage].Punts;
   let _pi20 = client.mstats[editedmessage].PuntsInside20;
   let _ptbs = client.mstats[editedmessage].PuntTouchbacks;
   let _puntyards = client.mstats[editedmessage].PuntYards;
   let _A = ((_pcomp/_patt)-0.3)*5
   let _B = ((_pyards/_patt)-3)*0.25
   let _C = (_ptds/_patt)*20
   let _D = 2.375-((_pints/_patt)*25)
   let _prating = ((_A+_B+_C+_D)/6)*100
   const _team1 = _team.toLowerCase()
   if(client.teamcolors[_team1] == undefined){
       var _color = 13938487
       var _logo = "https://cdn.discordapp.com/attachments/479046880391856159/738581773952352386/scfsl.png"
   }else {
       var _color = client.teamcolors[_team1].Color;
       var _logo = client.teamcolors[_team1].Logo;  
   }
   if(_name == ""){
        message.channel.send("If you believe you have already done this DM Toasty")
   } if(_patt > 0){
    const embed = {
        "title": _regclass +" "+ _pos + " - " + _name + " - " + _team,
        "description": "TPE Spent: " + _tpe,
        "color": _color,
        "footer": {
          "text": "This bot was created by Toasty using Javascript. If you are interested in a bot for your server DM Toasty#4562"
        },
        "thumbnail": {
          "url": _logo
        },
        "author": {
          "name": "Dev League Passing Stats",
          "icon_url": "https://cdn.discordapp.com/attachments/479046880391856159/738581773952352386/scfsl.png"
        },
        "fields": [
          {
            "name": "Pass Completions: "  ,
            "value": _pcomp,
            "inline": true
          },
          {
            "name": "Pass Attempts: " ,
            "value": _patt,
            "inline": true
          },
          {
            "name": "Completion %: " ,
            "value": Number(_pcomp/_patt*100).toFixed(2) +"%",
            "inline": true
          },
          {
            "name": "Passing Yards: ",
            "value": _pyards,
            "inline": true
          },
          {
            "name": "Touchdowns: " ,
            "value": _ptds,
            "inline": true
          },
          {
            "name": "Interceptions: " ,
            "value": _pints,
            "inline": true
          },
          {
            "name": "Passer Rating: ",
            "value": Number(_prating).toFixed(2),
            "inline": true
          },
          {
            "name": "\u200b",
            "value": "\u200b",
            "inline": true
          },
        {
          "name": "Longest Pass: " ,
          "value": _plong,
          "inline": true
        }
        ]
      };
      message.channel.send({ embed });

   } if(_ratt > 0){
    const embed = {
        "title": _regclass +" "+ _pos + " - " + _name + " - " + _team,
        "description": "TPE Spent: " + _tpe,
        "color": _color,
        "footer": {
          "text": "This bot was created by Toasty using Javascript. If you are interested in a bot for your server DM Toasty#4562"
        },
        "thumbnail": {
          "url": _logo
        },
        "author": {
          "name": "Dev League Rushing Stats",
          "icon_url": "https://cdn.discordapp.com/attachments/479046880391856159/738581773952352386/scfsl.png"
        },
        "fields": [
          {
            "name": "Rushing Attempts: "  ,
            "value": _ratt,
            "inline": true
          },
          {
            "name": "Rushing Yards: " ,
            "value": _rushyards,
            "inline": true
          },
          {
            "name": "Yards Per Attempt: " ,
            "value": Number(_rushyards/_ratt).toFixed(2),
            "inline": true
          },
          {
            "name": "Long: ",
            "value": _rushlong,
            "inline": true
          },
          {
            "name": "Touchdowns: " ,
            "value": _rtd,
            "inline": true
          },
          {
            "name": "Fumbles: " ,
            "value": _fumbles,
            "inline": true
        }
        ]
      };
      message.channel.send({ embed });
    } if(_targets > 0){
        const embed = {
            "title": _regclass +" "+ _pos + " - " + _name + " - " + _team,
            "description": "TPE Spent: " + _tpe,
            "color": _color,
            "footer": {
              "text": "This bot was created by Toasty using Javascript. If you are interested in a bot for your server DM Toasty#4562"
            },
            "thumbnail": {
              "url": _logo
            },
            "author": {
              "name": "Dev League Receiving Stats",
              "icon_url": "https://cdn.discordapp.com/attachments/479046880391856159/738581773952352386/scfsl.png"
            },
            "fields": [
              {
                "name": "Catches"  ,
                "value": _catch,
                "inline": true
              },
              {
                "name": "Receiving Yards: " ,
                "value": _reyards,
                "inline": true
              },
              {
                "name": "Yards Per Catch: " ,
                "value": Number(_reyards/_catch).toFixed(2),
                "inline": true
              },
              {
                "name": "Touchdowns: ",
                "value": _rtd,
                "inline": true
              },
              {
                "name": "Drops: " ,
                "value": _drops,
                "inline": true
              },
              {
                "name": "Drop %: " ,
                "value": Number(_drops/(_catch+_drops)*100).toFixed(2)+"%",
                "inline": true
              },
              {
                "name": "Targets: ",
                "value": _targets,
                "inline": true
            },
            {
              "name": "Long: ",
              "value": _relong,
              "inline": true
            },
            {
              "name": "Fumbles: ",
              "value": _fumbles,
              "inline": true
            }
            ]
          };
          message.channel.send({ embed });
    } if(_tackles > 0){
        const embed = {
            "title": _regclass +" "+ _pos + " - " + _name + " - " + _team,
            "description": "TPE Spent: " + _tpe,
            "color": _color,
            "footer": {
              "text": "This bot was created by Toasty using Javascript. If you are interested in a bot for your server DM Toasty#4562"
            },
            "thumbnail": {
              "url": _logo
            },
            "author": {
              "name": "Dev League Defensive Stats",
              "icon_url": "https://cdn.discordapp.com/attachments/479046880391856159/738581773952352386/scfsl.png"
            },
            "fields": [
              {
                "name": "Tackles: "  ,
                "value": _tackles,
                "inline": true
              },
              {
                "name": "Sacks:" ,
                "value": _sacks,
                "inline": true
              },
              {
                "name": "Forced Fumbles:" ,
                "value": _ffs,
                "inline": true
              },
              {
                "name": "Interceptions: ",
                "value": _ints,
                "inline": true
              },
              {
                "name": "Knockdowns: " ,
                "value": _pds,
                "inline": true
              },
              {
                "name": "Fumble Recoveries: " ,
                "value": _frs,
                "inline": true
              },
              {
                "name": "\u200b" ,
                "value": "\u200b",
                "inline": true
              },
              {
                "name": "Touchdowns: ",
                "value": _rtd,
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
    } if(_xpa + _fga > 0){
        const embed = {
            "title": _regclass +" "+ _pos + " - " + _name + " - " + _team,
            "description": "TPE Spent: " + _tpe,
            "color": _color,
            "footer": {
              "text": "This bot was created by Toasty using Javascript. If you are interested in a bot for your server DM Toasty#4562"
            },
            "thumbnail": {
              "url": _logo
            },
            "author": {
              "name": "Dev League Kicking Stats",
              "icon_url": "https://cdn.discordapp.com/attachments/479046880391856159/738581773952352386/scfsl.png"
            },
            "fields": [
              {
                "name": "XPM:"  ,
                "value": _xpm,
                "inline": true
              },
              {
                "name": "XPA:" ,
                "value": _xpa,
                "inline": true
              },
              {
                "name": "XP%:" ,
                "value": Number(_xpm/(_xpa)*100).toFixed(2)+"%",
                "inline": true
              },
              {
                "name": "FGM:",
                "value": _fgm,
                "inline": true
              },
              {
                "name": "FGA: " ,
                "value": _fga,
                "inline": true
              },
              {
                "name": "FG%:" ,
                "value": Number(_fgm/(_fga)*100).toFixed(2)+"%",
                "inline": true
              },
              {
                "name": "Punts:" ,
                "value": _punts,
                "inline": true
              },
              {
                "name": "Punt Yards: ",
                "value": _puntyards,
                "inline": true
            },
            {
                "name": "Average Yards/Punt: " ,
                "value": Number(_puntyards/_punts).toFixed(2),
                "inline": true
              },
              {
                "name": "Punt Touchbacks: " ,
                "value": _ptbs,
                "inline": true
              },
              {
                "name": "\u200b",
                "value": "\u200b",
                "inline": true
              },
              {
                "name": "Punts in 20: " ,
                "value": _pi20,
                "inline": true
              }
            ]
          };
          message.channel.send({ embed });
    } if(_penalties > 0){
        const embed = {
            "title": _regclass +" "+ _pos + " - " + _name + " - " + _team,
            "description": "TPE Spent: " + _tpe,
            "color": _color,
            "footer": {
              "text": "This bot was created by Toasty using Javascript. If you are interested in a bot for your server DM Toasty#4562"
            },
            "thumbnail": {
              "url": _logo
            },
            "author": {
              "name": "Dev League Penalty Stats",
              "icon_url": "https://cdn.discordapp.com/attachments/479046880391856159/738581773952352386/scfsl.png"
            },
            "fields": [
              {
                "name": "Penalties:"  ,
                "value": _penalties,
                "inline": true
              },
              {
                "name": "Penalty Yards:" ,
                "value": _penyards,
                "inline": true
              },
              {
                "name": "Average Yards/Penalty: " ,
                "value": Number(_penyards/(_penalties)).toFixed(2),
                "inline": true
              }
            ]
          };
          message.channel.send({ embed });
    }
}

    
    } else if (message.content.startsWith('s!attributes')){
        const args1 = message.content.slice(13).split();
        const command1 = args1.shift().toLowerCase();
        editedmessage = command1
        if (editedmessage == ""){
            if(client.playernames[message.author.id] == undefined){
                message.channel.send('I could not find your player. Please use "s!set player" to set up automatic stats i.e. s!set player Willie B. Hardagain')
            } else{
                let _message = client.playernames[message.author.id].player;
                args2 = _message
                const command2 = args2.toLowerCase();
                editedmessage = command2
            }
            
        }
        if(client.attributes[editedmessage] == undefined){
            message.channel.send(editedmessage + ' is not in the statabase. If you believe he should be DM Toasty.')
        } else {
            let _name = client.attributes[editedmessage].Name;
            let _regclass = client.attributes[editedmessage].RegressionClass;
            let _team = client.attributes[editedmessage].Team;
            let _pos = client.attributes[editedmessage].Position;
            let _tpe = client.attributes[editedmessage].TPESpent;
            let _dcp = client.attributes[editedmessage].DepthChartPosition;
            let _number = client.attributes[editedmessage].NUMBER;
            let _spd = client.attributes[editedmessage].SPEED;
            let _tb = client.attributes[editedmessage].TLKBRK;
            let _fum = client.attributes[editedmessage].FUMBLE;
            let _catch = client.attributes[editedmessage].CATCH;
            let _blk = client.attributes[editedmessage].BLKING;
            let _tacc = client.attributes[editedmessage].THRACC;
            let _kpwr = client.attributes[editedmessage].KCKPWR;
            let _kacc = client.attributes[editedmessage].KCKACC;
            let _bb = client.attributes[editedmessage].BLKBRK;
            let _tkl = client.attributes[editedmessage].TACKLE;
            let _tpwr = client.attributes[editedmessage].THRPWR;
            let _aware = client.attributes[editedmessage].AWARE;
            let _agl = client.attributes[editedmessage].AGIL;
            let _cover = client.attributes[editedmessage].COVER;
            let _hpwr = client.attributes[editedmessage].HITPWR;
            let _end = client.attributes[editedmessage].ENDUR;
            let _dis = client.attributes[editedmessage].DISCIPLINE;
            const _team1 = _team.toLowerCase()
            if(client.teamcolors[_team1] == undefined){
              var _color = 13938487
              var _logo = "https://cdn.discordapp.com/attachments/479046880391856159/738581773952352386/scfsl.png"
          }else {
              var _color = client.teamcolors[_team1].Color;
              var _logo = client.teamcolors[_team1].Logo;  
          }
            const embed = {
              "title": _regclass +" "+ _pos + " - " + "#" + _number + " - " + _name + " - " + _team,
              "description": "TPE Spent: " + _tpe +'\n'+"Depth Chart Position: " +_dcp,
              "color": _color,
              "footer": {
                "text": "This bot was created by Toasty using Javascript. If you are interested in a bot for your server DM Toasty#4562"
              },
              "thumbnail": {
                "url": _logo
              },
              "author": {
                "name": "Attributes",
                "icon_url": "https://cdn.discordapp.com/attachments/479046880391856159/738581773952352386/scfsl.png"
              },
              "fields": [
                {
                  "name": "Speed:"  ,
                  "value": _spd,
                  "inline": true
                },
                {
                  "name": "Tackle Break:" ,
                  "value": _tb,
                  "inline": true
                },
                {
                  "name": "Catch:" ,
                  "value": _catch,
                  "inline": true
                },
                {
                  "name": "Blocking:",
                  "value": _blk,
                  "inline": true
                },
                {
                  "name": "Fumble:",
                  "value": _fum,
                  "inline": true
                },
                {
                  "name": "Agilty:",
                  "value": _agl,
                  "inline": true
                },
                {
                  "name": "Throw Accuracy:",
                  "value": _tacc,
                  "inline": true
                },
                {
                  "name": "Throw Power:",
                  "value": _tpwr,
                  "inline": true
                },
                {
                  "name": "Awareness:",
                  "value": _aware,
                  "inline": true
                },
                {
                  "name": "Break Block:",
                  "value": _bb,
                  "inline": true
                },
                {
                  "name": "Tackle:",
                  "value": _tkl,
                  "inline": true
                },
                {
                  "name": "Cover:",
                  "value": _cover,
                  "inline": true
                },
                {
                  "name": "Hit Power:",
                  "value": _hpwr,
                  "inline": true
                },
                {
                  "name": "Kick Accuracy:",
                  "value": _kacc,
                  "inline": true
                },
                {
                  "name": "Kick Power:",
                  "value": _kpwr,
                  "inline": true
                },
                {
                  "name": "Endurance:",
                  "value": _end,
                  "inline": true
                },
                {
                  "name": "\u200b",
                  "value": "\u200b",
                  "inline": true
                },
                {
                  "name": "Discipline:",
                  "value": _dis,
                  "inline": true
                }
              ]
            };
            message.channel.send({ embed });
        }
}else if(message.content.startsWith('s!week')){
        const args1 = message.content.slice(2).split();
        const command1 = args1.shift().toLowerCase();
        editedmessage = command1
        if(client.schedule[editedmessage] == undefined){
            message.channel.send("I could not find " + editedmessage + " in the schedule. If this is wrong DM Toasty.")
        }else {
            let _game1 = client.schedule[editedmessage].Game1;
            let _game2 = client.schedule[editedmessage].Game2;
            let _game3 = client.schedule[editedmessage].Game3;
            let _game4 = client.schedule[editedmessage].Game4;
            let _game5 = client.schedule[editedmessage].Game5;
            let _game6 = client.schedule[editedmessage].Game6;
            let _week = client.schedule[editedmessage].Week;
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
                "name": _week,
                "icon_url": "https://cdn.discordapp.com/attachments/479046880391856159/738581773952352386/scfsl.png"
              },
              "fields": [
                {
                  "name": _game1,
                  "value": "\u200b",
                  "inline": true
                },
                {
                  "name": _game2,
                  "value": "\u200b",
                  "inline": true
                },
                {
                  "name": _game3,
                  "value": "\u200b",
                  "inline": true
                },
                {
                  "name": _game4,
                  "value": "\u200b",
                  "inline": true
                },
                {
                  "name": _game5,
                  "value": "\u200b",
                  "inline": true
                },
                {
                  "name": _game6,
                  "value": "\u200b",
                  "inline": true
                }
              ]
            };
            message.channel.send({ embed });
        }           

}else if (command == 'help'){



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
    
    } else if (command == 'invitebot'){
        client.commands.get('invitebot').execute(message, args)
    } else if (command == 'kill'){
        let authora = message.author.id
        if (authora == '419214607970992128'){
            message.channel.send('Father why would you do this to me')
            let _kill = client.defense[authora].Name;
        
        } else if (message.author.id !== '419214607970992128'){
            message.channel.send('You are not my real father! You can not tell me what to do!');
        }
    }else if (message.content.startsWith("s!weather week")){
        const args1 = message.content.slice(10).split();
        const command1 = args1.shift().toLowerCase();
        editedmessage = command1
        if(client.schedule[editedmessage] == undefined){
            message.channel.send("I could not find " + editedmessage + " in the schedule. If this is wrong DM Toasty.")
        }else {
            let _game1 = client.schedule[editedmessage].Game1;
            let _game2 = client.schedule[editedmessage].Game2;
            let _game3 = client.schedule[editedmessage].Game3;
            let _game4 = client.schedule[editedmessage].Game4;
            let _game5 = client.schedule[editedmessage].Game5;
            let _game6 = client.schedule[editedmessage].Game6;
            let _week = client.schedule[editedmessage].Week;
            const windroll1 = Math.floor(Math.random() * 10) + 1;
        if(windroll1 == 1){
            var _wind1 = "No Wind " + windroll1
        } else if(windroll1 == 2){
            var _wind1 = "Low Winds " + windroll1
        } else if(windroll1 == 3){
            var _wind1 = "High Winds " + windroll1
        } else if(windroll1 == 4){
            var _wind1 = "High Winds " + windroll1
        } else if(windroll1 == 5){
            var _wind1 = "No Wind " + windroll1
        } else if(windroll1 == 6){
            var _wind1 = "Low Winds " + windroll1
        } else if(windroll1 == 7){
            var _wind1 = "High Winds " + windroll1
        } else if(windroll1 == 8){
            var _wind1 = "Low Winds " + windroll1
        } else if(windroll1 == 9){
            var _wind1 = "Low Winds " + windroll1
        } else if(windroll1 == 10){
            var _wind1 = "No Wind " + windroll1
        }
        const wr1 = Math.floor(Math.random() * 10) + 1;
        if(wr1 == 1){
            var _weather1 = "Cloudy " + wr1
        } else if(wr1 == 2){
            var _weather1 = "Sunny " + wr1
        } else if(wr1 == 3){
            var _weather1 = "Snow " + wr1
        } else if(wr1 == 4){
            var _weather1 = "Rainy " + wr1
        } else if(wr1 == 5){
            var _weather1 = "Cloudy " + wr1
        } else if(wr1 == 6){
            var _weather1 = "Sunny " + wr1
        } else if(wr1 == 7){
            var _weather1 = "Rainy " + wr1
        } else if(wr1 == 8){
            var _weather1 = "Sunny " + wr1
        } else if(wr1 == 9){
            var _weather1 = "Sunny " + wr1
        } else if(wr1 == 10){
            var _weather1 = "Cloudy " + wr1
        }
        const windroll2 = Math.floor(Math.random() * 10) + 1;
        if(windroll2 == 1){
            var _wind2 = "No Wind " + windroll2
        } else if(windroll2 == 2){
            var _wind2 = "Low Winds " + windroll2
        } else if(windroll2 == 3){
            var _wind2 = "High Winds " + windroll2
        } else if(windroll2 == 4){
            var _wind2 = "High Winds " + windroll2
        } else if(windroll2 == 5){
            var _wind2 = "No Wind " + windroll2
        } else if(windroll2 == 6){
            var _wind2 = "Low Winds " + windroll2
        } else if(windroll2 == 7){
            var _wind2 = "High Winds " + windroll2
        } else if(windroll2 == 8){
            var _wind2 = "Low Winds " + windroll2
        } else if(windroll2 == 9){
            var _wind2 = "Low Winds " + windroll2
        } else if(windroll2 == 10){
            var _wind2 = "No Wind " + windroll2
        }
        const windroll3 = Math.floor(Math.random() * 10) + 1;
        if(windroll3 == 1){
            var _wind3 = "No Wind " + windroll3
        } else if(windroll3 == 2){
            var _wind3 = "Low Winds " + windroll3
        } else if(windroll3 == 3){
            var _wind3 = "High Winds " + windroll3
        } else if(windroll3 == 4){
            var _wind3 = "High Winds " + windroll3
        } else if(windroll3 == 5){
            var _wind3 = "No Wind " + windroll3
        } else if(windroll3 == 6){
            var _wind3 = "Low Winds " + windroll3
        } else if(windroll3 == 7){
            var _wind3 = "High Winds " + windroll3
        } else if(windroll3 == 8){
            var _wind3 = "Low Winds " + windroll3
        } else if(windroll3 == 9){
            var _wind3 = "Low Winds " + windroll3
        } else if(windroll3 == 10){
            var _wind3 = "No Wind " + windroll3
        }
        const windroll4 = Math.floor(Math.random() * 10) + 1;
        if(windroll4 == 1){
            var _wind4 = "No Wind " + windroll4
        } else if(windroll4 == 2){
            var _wind4 = "Low Winds " + windroll4
        } else if(windroll4 == 3){
            var _wind4 = "High Winds " + windroll4
        } else if(windroll4 == 4){
            var _wind4 = "High Winds " + windroll4
        } else if(windroll4 == 5){
            var _wind4 = "No Wind " + windroll4
        } else if(windroll4 == 6){
            var _wind4 = "Low Winds " + windroll4
        } else if(windroll4 == 7){
            var _wind4 = "High Winds " + windroll4
        } else if(windroll4 == 8){
            var _wind4 = "Low Winds " + windroll4
        } else if(windroll4 == 9){
            var _wind4 = "Low Winds " + windroll4
        } else if(windroll4 == 10){
            var _wind4 = "No Wind " + windroll4
        }
        const windroll5 = Math.floor(Math.random() * 10) + 1;
        if(windroll5 == 1){
            var _wind5 = "No Wind " + windroll5
        } else if(windroll5 == 2){
            var _wind5 = "Low Winds " + windroll5
        } else if(windroll5 == 3){
            var _wind5 = "High Winds " + windroll5
        } else if(windroll5 == 4){
            var _wind5 = "High Winds " + windroll5
        } else if(windroll5 == 5){
            var _wind5 = "No Wind " + windroll5
        } else if(windroll5 == 6){
            var _wind5 = "Low Winds " + windroll5
        } else if(windroll5 == 7){
            var _wind5 = "High Winds " + windroll5
        } else if(windroll5 == 8){
            var _wind5 = "Low Winds " + windroll5
        } else if(windroll5 == 9){
            var _wind5 = "Low Winds " + windroll5
        } else if(windroll5 == 10){
            var _wind5 = "No Wind " + windroll5
        }
        const windroll6 = Math.floor(Math.random() * 10) + 1;
        if(windroll6 == 1){
            var _wind6 = "No Wind " + windroll6
        } else if(windroll6 == 2){
            var _wind6 = "Low Winds " + windroll6
        } else if(windroll6 == 3){
            var _wind6 = "High Winds " + windroll6
        } else if(windroll6 == 4){
            var _wind6 = "High Winds " + windroll6
        } else if(windroll6 == 5){
            var _wind6 = "No Wind " + windroll6
        } else if(windroll6 == 6){
            var _wind6 = "Low Winds " + windroll6
        } else if(windroll6 == 7){
            var _wind6 = "High Winds " + windroll6
        } else if(windroll6 == 8){
            var _wind6 = "Low Winds " + windroll6
        } else if(windroll6 == 9){
            var _wind6 = "Low Winds " + windroll6
        } else if(windroll6 == 10){
            var _wind6 = "No Wind " + windroll6
        }
        const wr2 = Math.floor(Math.random() * 10) + 1;
        if(wr2 == 1){
            var _weather2 = "Cloudy " + wr2
        } else if(wr2 == 2){
            var _weather2 = "Sunny " + wr2
        } else if(wr2 == 3){
            var _weather2 = "Snow " + wr2
        } else if(wr2 == 4){
            var _weather2 = "Rainy " + wr2
        } else if(wr2 == 5){
            var _weather2 = "Cloudy " + wr2
        } else if(wr2 == 6){
            var _weather2 = "Sunny " + wr2
        } else if(wr2 == 7){
            var _weather2 = "Rainy " + wr2
        } else if(wr2 == 8){
            var _weather2 = "Sunny " + wr2
        } else if(wr2 == 9){
            var _weather2 = "Sunny " + wr2
        } else if(wr2 == 10){
            var _weather2 = "Cloudy " + wr2
        }
        const wr3 = Math.floor(Math.random() * 10) + 1;
        if(wr3 == 1){
            var _weather3 = "Cloudy " + wr3
        } else if(wr3 == 2){
            var _weather3 = "Sunny " + wr3
        } else if(wr3 == 3){
            var _weather3 = "Snow " + wr3
        } else if(wr3 == 4){
            var _weather3 = "Rainy " + wr3
        } else if(wr3 == 5){
            var _weather3 = "Cloudy " + wr3
        } else if(wr3 == 6){
            var _weather3 = "Sunny " + wr3
        } else if(wr3 == 7){
            var _weather3 = "Rainy " + wr3
        } else if(wr3 == 8){
            var _weather3 = "Sunny " + wr3
        } else if(wr3 == 9){
            var _weather3 = "Sunny " + wr3
        } else if(wr3 == 10){
            var _weather3 = "Cloudy " + wr3
        }
        const wr4 = Math.floor(Math.random() * 10) + 1;
        if(wr4 == 1){
            var _weather4 = "Cloudy " + wr4
        } else if(wr4 == 2){
            var _weather4 = "Sunny " + wr4
        } else if(wr4 == 3){
            var _weather4 = "Snow " + wr4
        } else if(wr4 == 4){
            var _weather4 = "Rainy " + wr4
        } else if(wr4 == 5){
            var _weather4 = "Cloudy " + wr4
        } else if(wr4 == 6){
            var _weather4 = "Sunny " + wr4
        } else if(wr4 == 7){
            var _weather4 = "Rainy " + wr4
        } else if(wr4 == 8){
            var _weather4 = "Sunny " + wr4
        } else if(wr4 == 9){
            var _weather4 = "Sunny " + wr4
        } else if(wr4 == 10){
            var _weather4 = "Cloudy " + wr4
        }
        const wr5 = Math.floor(Math.random() * 10) + 1;
        if(wr5 == 1){
            var _weather5 = "Cloudy " + wr5
        } else if(wr5 == 2){
            var _weather5 = "Sunny " + wr5
        } else if(wr5 == 3){
            var _weather5 = "Snow " + wr5
        } else if(wr5 == 4){
            var _weather5 = "Rainy " + wr5
        } else if(wr5 == 5){
            var _weather5 = "Cloudy " + wr5
        } else if(wr5 == 6){
            var _weather5 = "Sunny " + wr5
        } else if(wr5 == 7){
            var _weather5 = "Rainy " + wr5
        } else if(wr5 == 8){
            var _weather5 = "Sunny " + wr5
        } else if(wr5 == 9){
            var _weather5 = "Sunny " + wr5
        } else if(wr5 == 10){
            var _weather5 = "Cloudy " + wr5
        }
        const wr6 = Math.floor(Math.random() * 10) + 1;
        if(wr6 == 1){
            var _weather6 = "Cloudy " + wr6
        } else if(wr6 == 2){
            var _weather6 = "Sunny " + wr6
        } else if(wr6 == 3){
            var _weather6 = "Snow " + wr6
        } else if(wr6 == 4){
            var _weather6 = "Rainy " + wr6
        } else if(wr6 == 5){
            var _weather6 = "Cloudy " + wr6
        } else if(wr6 == 6){
            var _weather6 = "Sunny " + wr6
        } else if(wr6 == 7){
            var _weather6 = "Rainy " + wr6
        } else if(wr6 == 8){
            var _weather6 = "Sunny " + wr6
        } else if(wr6 == 9){
            var _weather6 = "Sunny " + wr6
        } else if(wr6 == 10){
            var _weather6 = "Cloudy " + wr6
        }

            const embed = {
              "title": "Matchups:",
              "description": "Weather",
              "color": 13938487,
              "footer": {
                "text": "This bot was created by Toasty using Javascript. If you are interested in a bot for your server DM Toasty#4562"
              },
              "thumbnail": {
                "url": "https://media.discordapp.net/attachments/479046880391856159/738581773952352386/scfsl.png?width=498&height=498"
              },
              "author": {
                "name": _week,
                "icon_url": "https://cdn.discordapp.com/attachments/479046880391856159/738581773952352386/scfsl.png"
              },
              "fields": [
                {
                  "name": _game1,
                  "value": _wind1 + "\n" + _weather1,
                  "inline": true
                },
                {
                  "name": _game2,
                  "value": _wind2 + "\n" + _weather2,
                  "inline": true
                },
                {
                  "name": _game3,
                  "value": _wind3 + "\n" + _weather3,
                  "inline": true
                },
                {
                  "name": _game4,
                  "value": _wind4 + "\n" + _weather4,
                  "inline": true
                },
                {
                  "name": _game5,
                  "value": _wind5 + "\n" + _weather5,
                  "inline": true
                },
                {
                  "name": _game6,
                  "value": _wind6 + "\n" + _weather6,
                  "inline": true
                }
              ]
            };
            message.channel.send({ embed });
        }

    } 
    
}
);

client.login(process.env.TOKEN)

