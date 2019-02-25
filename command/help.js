const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async(bot, message, args) => {
    let helpembed = new Discord.RichEmbed()
    .setDescription("--->Help Menu<---")
    .setColor("#f442aa")
    .addField("Commands available:")
    .addField(`${botconfig.prefix}help`, `${botconfig.prefix}help`)
    .setFooter("NewBit");

    message.author.send(helpembed)
    return message.channel.send("look Dm");
    
}

module.exports.help = {
    name: `${botconfig.prefix}help`
}