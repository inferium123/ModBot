const Discord = require('discord.js');
const botsettings = require('./botsettings.json');

const bot = new Discord.Client({disableEveryone: true});

require("./util/eventHandler")(bot)

const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js") 
    if(jsfile.length <= 0) {
         return console.log("[LOGS] Couldn't Find Commands!");
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        bot.commands.set(pull.config.name, pull);  
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        });
    });
});

bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = botsettings.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = message.content.substring(message.content.indexOf(' ')+1);

    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(bot,message,args)

})
bot.login(process.env.token)



//giveaway
settings = {
    prefix: "=",
    token: (process.env.token)
};
 
// Requires Manager from discord-giveaways
const { GiveawaysManager } = require("discord-giveaways");
// Starts updating currents giveaways
const manager = new GiveawaysManager(bot, {
    storage: "./giveaways.json",
    updateCountdownEvery: 10000,
    default: {
        botsCanWin: false,
        exemptPermissions: [ "MANAGE_MESSAGES", "ADMINISTRATOR" ],
        embedColor: "#FF0000",
        reaction: "🥨"
    }
});
// We now have a giveawaysManager property to access the manager everywhere!
bot.giveawaysManager = manager;
  
bot.login(process.env.token)

bot.on("message", (message) => {
 
    const ms = require("ms"); // npm install ms
    const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
 
    if(command === "giveaway"){
        // g!start-giveaway 2d 1 Awesome prize!
        // will create a giveaway with a duration of two days, with one winner and the prize will be "Awesome prize!"
 
        bot.giveawaysManager.start(message.channel, {
            time: ms(args[0]),
            prize: args.slice(2).join(" "),
            winnerCount: parseInt(args[1])
        }).then((gData) => {
            console.log(gData); // {...} (messageid, end date and more)
        });
        // And the giveaway has started!
    }
});

// The list of all the giveaways
let allGiveaways = bot.giveawaysManager.giveaways; // [ {Giveaway}, {Giveaway} ]
 
// The list of all the giveaways on the server with ID "1909282092"
let onServer = bot.giveawaysManager.giveaways.filter((g) => g.guildID === "1909282092");

// The list of the current giveaways (not ended)
let notEnded = bot.giveawaysManager.giveaways.filter((g) => !g.ended);

bot.on("message", (message) => {
 
    const ms = require("ms"); // npm install ms
    const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
 
    if(command === "reroll"){
        let messageID = args[0];
        bot.giveawaysManager.reroll(messageID).then(() => {
            message.channel.send("Success! Giveaway rerolled!");
        }).catch((err) => {
            message.channel.send("No giveaway found for "+messageID+", please check and try again");
        });
    }
 
});

bot.on("message", (message) => {
 
    const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
 
    if(command === "edit"){
        let messageID = args[0];
        bot.giveawaysManager.edit(messageID, {
            newWinnerCount: 3,
            newPrize: "New Prize!",
            addTime: 5000
        }).then(() => {
            message.channel.send("Success! Giveaway will updated in less than "+(manager.updateCountdownEvery/1000)+" seconds.");
        }).catch((err) => {
            message.channel.send("No giveaway found for "+messageID+", please check and try again");
        });
    }
 
});

bot.on("message", (message) => {
 
    const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
 
    if(command === "delete"){
        let messageID = args[0];
        bot.giveawaysManager.delete(messageID).then(() => {
            message.channel.send("Success! Giveaway deleted!");
        }).catch((err) => {
            message.channel.send("No giveaway found for "+messageID+", please check and try again");
        });
    }
 
});

// bot.giveawaysManager.reroll(messageID, {
//     messages: {
//         congrat: ":tada: New winner(s) : {winners}! Congratulations!",
//         error: "No valid participations, no winners can be chosen!"
//     }
// }).catch((err) => {
//     message.channel.send("No giveaway found for "+messageID+", please check and try again");
// });

