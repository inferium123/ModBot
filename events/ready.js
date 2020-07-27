const Discord = require("discord.js");
const { watch } = require("fs");

module.exports = bot => { 
    console.log(`${bot.user.username} is online`)
    bot.user.setActivity(`${client.guilds.cache.size} servers!`)

}