
Save New Duplicate & Edit Just Text
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const verify = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription([
            "React to this message to get full access to the server :tada:"
        ])

    let msgEmbed = await message.channel.send(verify)
    msgEmbed.react(':VoteYes:722455899192557629')

    const filter = (reaction, user) => {
        return [':VoteYes:722455899192557629'].includes(reaction.emoji.name) && user.id === message.author.id;
    };

    message.awaitReactions(filter, {
            max: 1,
            time: 60000,
            errors: ['time']
        })
        .then(collected => {
            const reaction = collected.first();

            if (reaction.emoji.name === ':VoteYes:722455899192557629') {
                const hotdogembed = new Discord.MessageEmbed()
                    .setTitle("You Gay")
                    .setColor("RANDOM")
                message.channel.send(hotdogembed)
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