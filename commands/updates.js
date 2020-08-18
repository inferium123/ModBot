const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    return message.channel.send("```updates: 1) changed activity to 'streaming'    2) giveaway commands are now public.       3) updated meme commands.      4) added userinfo command       ```")
}

module.exports.config = {
    name: "alexainfo",
    description: "alexainfo",
    usage: "=alexainfo",
    accessableby: "Members",
    aliases: ['ai']
}