module.exports = {
    name: "mpassingStats",
    description: "This command gets a player's stats for you",
    execute(message, args) {
      const embed = {
        title:
          args._regclass +
          " " +
          args._pos +
          " - " +
          args._name +
          " - " +
          args._team,
        description: "TPE Spent: " + args._tpe,
        color: args._color,
        footer: {
          text:
            "This bot was created by Toasty using Javascript. If you are interested in a bot for your server DM Toasty#4562",
        },
        thumbnail: {
          url: args._logo,
        },
        author: {
          name: "Major League Passing Stats",
          icon_url:
            "https://cdn.discordapp.com/attachments/479046880391856159/738581773952352386/scfsl.png",
        },
        fields: [
          {
            name: "Pass Completions: ",
            value: args._pcomp,
            inline: true,
          },
          {
            name: "Pass Attempts: ",
            value: args._patt,
            inline: true,
          },
          {
            name: "Completion %: ",
            value: args.completionPercentage,
            inline: true,
          },
          {
            name: "Passing Yards: ",
            value: args._pyards,
            inline: true,
          },
          {
            name: "Touchdowns: ",
            value: args._ptds,
            inline: true,
          },
          {
            name: "Interceptions: ",
            value: args._pints,
            inline: true,
          },
          {
            name: "Passer Rating: ",
            value: args.passerRating,
            inline: true,
          },
          {
            name: "\u200b",
            value: "\u200b",
            inline: true,
          },
          {
            name: "Longest Pass: ",
            value: args._plong,
            inline: true,
          },
        ],
      };
      message.channel.send({ embed });
    },
  };