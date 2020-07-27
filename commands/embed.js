const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('Invite Me! (click on this)')
        .setURL('https://discord.com/oauth2/authorize?client_id=722782077111631935&scope=bot&permissions=2146958847')
        .setAuthor('Assassin#1234')
        .setDescription('This is my first public bot ! Im adding 1 new feature ever day !')
        .setColor('#FF2D00')
        .setThumbnail('https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')
        .setImage('https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')
        .setFooter('This is a example footer', 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')
        .addFields(
            { name: 'Test Number 1', value: 'This is a example value', inline: true},
            { name: 'Test Number 2', value: 'This is a example value', inline: true}
        )
        .setTimestamp()


    message.channel.send(embed);
}

module.exports.config = {
    name: "invite",
    description: "example of an Embed.",
    usage: "?invite",
    accessableby: "Members",
    aliases: []
}