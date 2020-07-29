const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    message.reply ('Hello!!!')
}

module.exports.config = {
    name: "hello",
    description: "Answers hello, its just a test command.",
    usage: "=hello",
    accessableby: "Members",
    aliases: []
}