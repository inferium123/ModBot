const Discord = require("discord.js");
const { watch } = require("fs");

module.exports = bot => { 
    console.log(`${bot.user.username} is online`)
    Discord.user.setActivity(`${client.guilds.cache.size} servers!`)

}