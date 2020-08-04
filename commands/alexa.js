const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    return message.channel.send("<@416792561047437322> is the coolest person alive becuz he helped build me !")
}

module.exports.config = {
    name: "alexainfo",
    description: "alexainfo",
    usage: "=alexainfo",
    accessableby: "Members",
    aliases: ['ai']
}