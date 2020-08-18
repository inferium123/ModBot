const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    return message.channel.send("```updates: 1) changed activity to 'streaming'    2) giveaway commands are now public.       3) updated meme commands.      4) added userinfo command       ```")
}

module.exports.config = {
    name: "updates",
    description: "check new updates",
    usage: "=updates",
    accessableby: "Members",
    aliases: ['update','up']
}