const Discord = require("discord.js");
const { watch } = require("fs");

module.exports = bot => { 
    bot.user.setActivity( `${client.guilds.cache.size} servers !`, {type: "WATCHING"});

     console.log(`${bot.user.username} is online`)
   
}