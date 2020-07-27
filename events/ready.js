const Discord = require("discord.js");
const { watch } = require("fs");

module.exports = bot => { 
    console.log(`${bot.user.username} is online`)
    bot.user.setActivity("Raikyuu on youtube !", {type: "WATCHING"});
}