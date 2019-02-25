const Discord = require("discord.js");
const botconfig = require("../botconfig.json")

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot name: ", bot.user.username)
    .addField("Bot create: ", bot.user.createdAt);

    //to delete a message
    //message.delete().catch(O_o=>{});
    return message.channel.send(botembed);

}
 
module.exports.help = {
  name: `${botconfig.prefix}botinfo`
}