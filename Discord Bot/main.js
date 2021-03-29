const {
	error
} = require('console');
const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
const result = require('dotenv')
	.config();

const {
	MessageEmbed
} = require('discord.js')

const prefix = 's!'

const repeating = require('repeating');

client.commands = new Discord.Collection();

client.playernames = require("./stats/players.json")

client.teamcolors = require("./stats/colors.json")

client.stats = require("./stats/stats.json")

client.mstats = require("./stats/mstats.json")

client.attributes = require("./stats/attributes.json")

client.standings = require("./stats/standings.json")

client.schedule = require("./stats/schedule.json")

const currentdate = new Date(); 

const updated =  (currentdate.getMonth()+1)  + "/" + currentdate.getDate() + "/" +   + currentdate.getFullYear() + " @ "   + currentdate.getHours() + ":"  + currentdate.getMinutes() + ":" + currentdate.getSeconds();;


const commandFiles = fs.readdirSync('./commands/')
	.filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
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

client.on('message', message => {

	if(!message.content.startsWith(prefix) || message.author.bot) return;
	var currentdate = new Date(); 
	var datetime = " - " + (currentdate.getMonth()+1)  + "/" 
		+ currentdate.getDate() + "/"
		+ currentdate.getFullYear() + " @ "  
		+ currentdate.getHours() + ":"  
		+ currentdate.getMinutes() + ":" 
		+ currentdate.getSeconds();
	console.log(message.author.username + " in " + message.guild.name + " in " + message.channel.name + " " + datetime + " - " + message.content)
	const args = message.content.slice(prefix.length)
		.split(/ +/);
	const command = args.shift()
		.toLowerCase();

	if(command === 'ping') {
		client.commands.get('ping')
			.execute(message, args);

	} else if(command == 'twitch') {
		
		client.commands.get('twitch')
			.execute(message, args);

	} else if(command == 'youtube') {
		client.commands.get('youtube')
			.execute(message, args);

	} else if(command == 'schedule') {
		client.commands.get('schedule')
			.execute(message, args);

	} else if(command == 'ac') {
		client.commands.get('ac')
			.execute(message, args);

	} else if(command == 'create') {
		client.commands.get('create')
			.execute(message, args);

	} else if(command == 'rulebook') {
		client.commands.get('rulebook')
			.execute(message, args);

	} else if(command == 'bank') {
		client.commands.get('bank')
			.execute(message, args);

	} else if(command == 'tpescale') {
		client.commands.get('tpescale')
			.execute(message, args);

	} else if(command == 'allweather') {
		client.commands.get('weather')
			.execute(message, args);
		client.commands.get('wind')
			.execute(message, args);

	} else if(message.content.startsWith('s!set player')) {
		editedmessage = message.content.slice(13);
		client.playernames[message.author.id] = {
			player: editedmessage
		}
		fs.writeFile("./stats/players.json", JSON.stringify(client.playernames, null, 4), err => {
			if(err) throw err;
			message.channel.send("Written as " + editedmessage);
		});

	} else if(message.content.startsWith('s!check player')) {
		let _message = client.playernames[message.author.id].player;
		message.channel.send('Player Name is: ' + _message);

	} else if(message.content.startsWith('s!stats')) {
		const args1 = message.content.slice(8)
			.split();
		const command1 = args1.shift()
			.toLowerCase();
		editedmessage = command1
		if(editedmessage == "") {
			if(client.playernames[message.author.id] == undefined) {
				message.channel.send('I could not find your player. Please use "s!set player" to set up automatic stats i.e. s!set player Willie B. Hardagain')
			} else {
				let _message = client.playernames[message.author.id].player;
				args2 = _message
				const command2 = args2.toLowerCase();
				editedmessage = command2
			}

		}
		if(client.stats[editedmessage] == undefined) {
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
			let _A = ((_pcomp / _patt) - 0.3) * 5
			let _B = ((_pyards / _patt) - 3) * 0.25
			let _C = (_ptds / _patt) * 20
			let _D = 2.375 - ((_pints / _patt) * 25)
			let _prating = ((_A + _B + _C + _D) / 6) * 100
			let _anya = ((_pyards + (_ptds * 20) - (_pints * 45) - (_qbsacks * 5)) / (_patt + _qbsacks))
			const _team1 = _team.toLowerCase()
			if(client.teamcolors[_team1] == undefined) {
				var _color = 13938487
				var _logo = "https://cdn.discordapp.com/attachments/479046880391856159/738581773952352386/scfsl.png"
			} else {
				var _color = client.teamcolors[_team1].Color;
				var _logo = client.teamcolors[_team1].Logo;
			}
			if(_name == "") {
				message.channel.send("If you believe you have already done this DM Toasty")
			}

			if(_patt > 0) {
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
					completionPercentage: Number((_pcomp / _patt) * 100)
						.toFixed(2) + "%",
					_pyards,
					_ptds,
					_pints,
					passerRating: Number(_prating)
						.toFixed(2),
					anya: Number(_anya)
						.toFixed(3),
					_plong,
					_qbsacks,
					_qbdrops,
					sackPercentage: Number((_qbsacks / (_qbsacks + _patt)) * 100)
						.toFixed(2) + "%",
					dropPercentage: Number((_qbdrops / _patt) * 100)
						.toFixed(2) + "%",
				};
				client.commands.get("passingStats")
					.execute(message, args);
			}
			if(_ratt > 0) {
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
				client.commands.get("rushingStats")
					.execute(message, args);
			}
			if(_targets > 0) {
				const args = {
					_regclass,
					_pos,
					_name,
					_team,
					_tpe,
					_color,
					_logo,
					_targets,
					_relong,
					_reyards,
					_drops,
					_catch,
					_rtd,
					_fumbles
				}
				client.commands.get("receivingStats")
					.execute(message, args);
			}
			if(_tackles + _sacks + _pds + _ints + _frs + _ffs > 0) {
				const args = {
					_regclass,
					_pos,
					_name,
					_team,
					_tpe,
					_color,
					_logo,
					_tackles,
					_sacks,
					_ints,
					_ffs,
					_pds,
					_frs,
					_rtd,
				}
				client.commands.get("defensiveStats")
					.execute(message, args);
			}
			if(_xpa + _fga + _punts > 0) {
				const args = {
					_regclass,
					_pos,
					_name,
					_team,
					_tpe,
					_color,
					_logo,
					_fga,
					_fgm,
					_xpa,
					_xpm,
					_punts,
					_puntyards,
					_ptbs,
					_pi20,
				}
				client.commands.get("kickingStats")
					.execute(message, args);
			}
			if(_penalties > 0) {
				const args = {
					_regclass,
					_pos,
					_name,
					_team,
					_tpe,
					_color,
					_logo,
					_penalties,
					_penyards,
				}
				client.commands.get("penaltyStats")
					.execute(message, args);
      }
      if(_patt + _ratt + _targets + _penalties + _xpa + _fga + _punts + _tackles + _sacks + _ffs + _frs + _pds + _ints == 0  )  {
        message.channel.send("You have played but have racked up no stats")
      }
		}
	} else if(message.content.startsWith('s!champ')) {
		message.channel.send("https://tenor.com/zw3L.gif")
	} else if(message.content.startsWith('s!mchamp')) {
		message.channel.send("https://tenor.com/xrpO.gif")
	} else if(message.content.startsWith('s!mstats')) {
		const args1 = message.content.slice(9)
			.split();
		const command1 = args1.shift()
			.toLowerCase();
		editedmessage = command1
		if(editedmessage == "") {
			if(client.playernames[message.author.id] == undefined) {
				message.channel.send('I could not find your player. Please use "s!set player" to set up automatic stats i.e. s!set player Willie B. Hardagain')
			} else {
				let _message = client.playernames[message.author.id].player;
				args2 = _message
				const command2 = args2.toLowerCase();
				editedmessage = command2
			}
		}
		if(client.mstats[editedmessage] == undefined) {
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
			let _A = ((_pcomp / _patt) - 0.3) * 5
			let _B = ((_pyards / _patt) - 3) * 0.25
			let _C = (_ptds / _patt) * 20
			let _D = 2.375 - ((_pints / _patt) * 25)
			let _prating = ((_A + _B + _C + _D) / 6) * 100
			const _team1 = _team.toLowerCase()
			if(client.teamcolors[_team1] == undefined) {
				var _color = 13938487
				var _logo = "https://cdn.discordapp.com/attachments/479046880391856159/738581773952352386/scfsl.png"
			} else {
				var _color = client.teamcolors[_team1].Color;
				var _logo = client.teamcolors[_team1].Logo;
			}
			if(_name == "") {
				message.channel.send("If you believe you have already done this DM Toasty")
			}
			if(_patt > 0) {
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
					completionPercentage: Number((_pcomp / _patt) * 100)
						.toFixed(2) + "%",
					_pyards,
					_ptds,
					_pints,
					passerRating: Number(_prating)
						.toFixed(2),
					_plong,
				};
				client.commands.get("mpassingStats")
					.execute(message, args);
			}
			if(_ratt > 0) {
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
				client.commands.get("rushingStats")
					.execute(message, args);
			}
			if(_targets > 0) {
				const args = {
					_regclass,
					_pos,
					_name,
					_team,
					_tpe,
					_color,
					_logo,
					_targets,
					_relong,
					_reyards,
					_drops,
					_catch,
					_rtd,
					_fumbles
				}
				client.commands.get("receivingStats")
					.execute(message, args);
			}
			if(_tackles + _sacks + _ffs + _frs + _pds + _ints  > 0) {
				const args = {
					_regclass,
					_pos,
					_name,
					_team,
					_tpe,
					_color,
					_logo,
					_tackles,
					_sacks,
					_ints,
					_ffs,
					_pds,
					_frs,
					_rtd,
				}
				client.commands.get("defensiveStats")
					.execute(message, args);
			}
			if(_xpa + _fga + _punts > 0) {
				const args = {
					_regclass,
					_pos,
					_name,
					_team,
					_tpe,
					_color,
					_logo,
					_fga,
					_fgm,
					_xpa,
					_xpm,
					_punts,
					_puntyards,
					_ptbs,
					_pi20,
				}
				client.commands.get("kickingStats")
					.execute(message, args);
			}
			if(_penalties > 0) {
				const args = {
					_regclass,
					_pos,
					_name,
					_team,
					_tpe,
					_color,
					_logo,
					_penalties,
					_penyards,
				}
				client.commands.get("penaltyStats")
					.execute(message, args);
      }
      if(_patt + _ratt + _targets + _penalties + _xpa + _fga + _punts + _tackles + _sacks + _ffs + _frs + _pds + _ints == 0  )  {
        message.channel.send("You have played but have racked up no stats")
      }
		}

	} else if(message.content.startsWith('s!attributes')) {
		const args1 = message.content.slice(13)
			.split();
		const command1 = args1.shift()
			.toLowerCase();
		editedmessage = command1
		if(editedmessage == "") {
			if(client.playernames[message.author.id] == undefined) {
				message.channel.send('I could not find your player. Please use "s!set player" to set up automatic stats i.e. s!set player Willie B. Hardagain')
			} else {
				let _message = client.playernames[message.author.id].player;
				args2 = _message
				const command2 = args2.toLowerCase();
				editedmessage = command2
			}

		}
		if(client.attributes[editedmessage] == undefined) {
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
			if(client.teamcolors[_team1] == undefined) {
				var _color = 13938487
				var _logo = "https://cdn.discordapp.com/attachments/479046880391856159/738581773952352386/scfsl.png"
			} else {
				var _color = client.teamcolors[_team1].Color;
				var _logo = client.teamcolors[_team1].Logo;
			}
			const args = {
				_color,
				_logo,
				_name,
				_regclass,
				_team,
				_pos,
				_tpe,
				_dcp,
				_number,
				_spd,
				_tb,
				_fum,
				_catch,
				_blk,
				_tacc,
				_kpwr,
				_kacc,
				_bb,
				_tkl,
				_tpwr,
				_aware,
				_agl,
				_cover,
				_hpwr,
				_end,
				_dis,
			}
			client.commands.get("attributes")
				.execute(message, args);
		}

	} else if(message.content.startsWith('s!week')) {
		const args1 = message.content.slice(2)
			.split();
		const command1 = args1.shift()
			.toLowerCase();
		editedmessage = command1
		if(client.schedule[editedmessage] == undefined) {
			message.channel.send("I could not find " + editedmessage + " in the schedule. If this is wrong DM Toasty.")
		} else {
			let _game1 = client.schedule[editedmessage].Game1;
			let _game2 = client.schedule[editedmessage].Game2;
			let _game3 = client.schedule[editedmessage].Game3;
			let _game4 = client.schedule[editedmessage].Game4;
			let _game5 = client.schedule[editedmessage].Game5;
			let _game6 = client.schedule[editedmessage].Game6;
			let _week = client.schedule[editedmessage].Week;
      
      const args = {
				_game1,
				_game2,
				_game3,
				_game4,
				_game5,
				_game6,
				_week,
			}
			client.commands.get("weeks")
				.execute(message, args);
		}

	} else if(command == 'help') {
		client.commands.get("help")
			.execute(message, args);
	} else if(command == 'invitebot') {
		client.commands.get('invitebot')
			.execute(message, args)
	} else if(command == 'kill') {
		let authora = message.author.id
		if(authora == '419214607970992128') {
			message.channel.send('Father why would you do this to me')
			let _kill = client.defense[authora].Name;

		} else if(message.author.id !== '419214607970992128') {
			message.channel.send('You are not my real father! You can not tell me what to do!');
		}
	} else if(message.content.startsWith("s!weather week")) {
		const args1 = message.content.slice(10)
			.split();
		const command1 = args1.shift()
			.toLowerCase();
		editedmessage = command1
		if(client.schedule[editedmessage] == undefined) {
			message.channel.send("I could not find " + editedmessage + " in the schedule. If this is wrong DM Toasty.")
		} else {
			let _game1 = client.schedule[editedmessage].Game1;
			let _game2 = client.schedule[editedmessage].Game2;
			let _game3 = client.schedule[editedmessage].Game3;
			let _game4 = client.schedule[editedmessage].Game4;
			let _game5 = client.schedule[editedmessage].Game5;
			let _game6 = client.schedule[editedmessage].Game6;
			let _week = client.schedule[editedmessage].Week;

			const args = {
				_game1,
				_game2,
				_game3,
				_game4,
				_game5,
				_game6,
				_week,
			}
			client.commands.get("weatherwheel")
				.execute(message, args);

		}

	} else if(command === "updated"){
		message.channel.send("The bot was last updated " + updated +" CST")
	}

});

client.login(process.env.TOKEN)