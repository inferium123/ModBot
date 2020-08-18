const Discord = require("discord.js");
const { watch } = require("fs");
module.exports = bot => { 

     console.log(`${bot.user.username} is online`)
     bot.user.setActivity( `${bot.guilds.cache.size} servers ${bot.users.cache.size} members !`, {type: "STREAMING", url: "https://www.twitch.tv/Assassin_118"});
     
}