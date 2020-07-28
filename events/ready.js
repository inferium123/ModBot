const Discord = require("discord.js");
const { watch } = require("fs");
const bot = new Discord.Client({disableEveryone: true});

module.exports = bot => { 

     console.log(`${bot.user.username} is online`)
     bot.user.setActivity( `${client.guilds.cache.size} servers !`, {type: "WATCHING"});
   
}