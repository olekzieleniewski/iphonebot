const Discord = require("discord.js");
const botconfig = require("../botconfig.json")

module.exports.run = async (bot, message, args) => {
    
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Couldn't find user.")
    let kreason = args.join(" ").slice(22);
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("No can do pal");
    if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("that person can't be kicked!");


    let kickembed = new Discord.RichEmbed()
    .setDescription("--->Kick<---")
    .setColor("15f153")
    .addField("Kick User:", `${kUser} with ID ${kUser.id}`)
    .addField("Kick by:", `${message.author} with ID: ${message.author.id}`)
    .addField("Time", `${message.createdAt}`)
    .addField("Reason", kreason);

    let kickChannel = message.guild.channels.find(`name`, "incidents");
    if(!kickChannel) return message.channel.send("Can't find incidets channel");

    message.guild.member(kUser).kick(kreason);
    kickChannel.send(kickembed);
    //to delete a message
    message.delete().catch(O_o=>{});
    
    
    return;


    

}
 
module.exports.help = {
  name: `${botconfig.prefix}kick`

}