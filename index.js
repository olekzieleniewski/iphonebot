const tokenfile = require("./tokenfile.json");
const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();


fs.readdir("./command/", (err, files) =>{

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js")

    if(jsfile.lenght <= 0){
        console.log("Couldn't find commadn");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./command/${f}`);
        console.log(`${f} loaded!`)
        bot.commands.set(props.help.name, props);
    });
});


bot.on("ready", async() => {
    console.log(`${bot.user.username} is online!`);
    bot.user.setActivity('!help', { type: 'WATCHING' });
});

bot.on("message", async message =>{
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = bot.commands.get(cmd.slice(prefix.lenght));
    if(commandfile) commandfile.run(bot,message,args);

});


bot.login(tokenfile.token);