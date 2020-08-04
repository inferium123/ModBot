const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    message.reply ('``is the coolest person alive cuz she helped <@734006373343297557> make me !``')
}

module.exports.config = {
    name: "=alexainfo",
    description: "Answers hello, its just a test command.",
    usage: "=hello",
    accessableby: "Members",
    aliases: []
}