const Discord = require("discord.js");
const botconfig = require("../botconfig.json")

module.exports.run = async (bot, message, args) => {
    let sicon = bot.user.displayAvatarURL
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Server name: ", message.guild.name)
    .addField("Server create: ", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount)

    //to delete a message
    //message.delete().catch(O_o=>{});
    return message.channel.send(serverembed);

}
 
module.exports.help = {
  name: `${botconfig.prefix}serverinfo`
}