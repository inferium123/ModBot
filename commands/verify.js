const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const verify = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription([
            "React to this message to get full access to the server :tada:"
        ])
    let msgEmbed = await message.channel.send(verify)
    msgEmbed.react('✅')

    const filter = (reaction, user) => {
        return ['✅'].includes(reaction.emoji.name) && user.id === message.author.id;
    };

    message.awaitReactions(filter, {
            max: 1,
            time: 60000,
            errors: ['time']
        })
        .then(collected => {
            const reaction = collected.first();

            if (reaction.emoji.name === '✅') {
                const embed = new Discord.MessageEmbed()
                    .setTitle("You Gay")
                    .setColor("RANDOM")
                message.channel.send(embed)
                console.log("YOU GAY")
            }
        })
        .catch(collected => {
            message.channel.send("React faster next time!");
            message.delete();
        });
}

module.exports.config = {
    name: "verify",
    aliases: [],
    description: ''
}