module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('BAN_MEMBERS')) 
        message.channel.send("You dont have permissions to do so ..");
    else {
        let bannedMember = await message.guild.members.ban(args);
        if(bannedMember){

        try {
            console.log(bannedMember.tag + " was banned.");
            message.channel.send (`${bannedMember} Has been banned from the server!`)
        }
            catch(err) {
            console.log(err);
        }
    }
}
}

module.exports.config = {
    name: "ban",
    description: "Bans a Users",
    usage: "+ban",
    accessableby: "Admins",
    aliases: []
}
