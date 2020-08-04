const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    return message.channel.send("is the coolest person alive becuz she helped build me !")
}

module.exports.config = {
    name: "alexainfo",
    description: "alexainfo",
    usage: "=alexainfo",
    accessableby: "Members",
    aliases: ['ai']
}