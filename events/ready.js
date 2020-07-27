const Discord = require("discord.js");
const { watch } = require("fs");
const client = new Discord.Client();
module.exports = bot => { 
    console.log(`${bot.user.username} is online`)
    client.user.setActivity(`${client.guilds.cache.size} servers!`)
}