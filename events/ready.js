const Discord = require("discord.js");
const { watch } = require("fs");

module.exports = bot => { 
    console.log(`${bot.user.username} is online`)
    //bot.user.setActivity("", {type: "WATCHING"});

    let statuses = [
        `${bot.guild.size}servers !`,
        "+help",
        `${bot.users.size} members !`
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.randon() * statuses.length)];
        bot.user.setActivity(status, {type: "WATCHING"});
    }, 5000)
}