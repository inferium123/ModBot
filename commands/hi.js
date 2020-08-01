const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    return message.channel.send(`${bot.guilds.cache.size} servers ${bot.users.cache.size} members !`)

module.exports.config = {
    name: "hi",
    description: "says hi",
    usage: "=hi",
    accessableby: "Members",
    aliases: ['h']
}