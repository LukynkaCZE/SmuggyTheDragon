const Discord = require("discord.js");
const client = new Discord.Client(); 


client.on('ready', bot => {
    console.log("Running bot on client " +client.user.tag)
    setInterval(() => {
        const index = getRandomInt(1, 5);
        switch(index) {
            case 1:
                client.user.setPresence({
                    status : "online",
                    activity : {
                        name : "Minecraft",
                        type : "PLAYING",
                    }
                }); 
                case 2:
                    client.user.setPresence({
                        status : "online",
                        activity : {
                            name : "sad lo-fi songs :(",
                            type : "LISTENING",
                        }
                    }); 
                case 3:
                client.user.setPresence({
                    status : "online",
                    activity : {
                        name : "twitch.tv/lnterz",
                        type : "WATCHING",
                    }
                }); 
                case 4:
                    client.user.setPresence({
                        status : "online",
                        activity : {
                            name : "MC Championship",
                            type : "COMPETING",
                        }
                    }); 
                case 5:
                client.user.setPresence({
                    status : "online",
                    activity : {
                        name : "with Endermans",
                        type : "PLAYING",
                    }
                }); 
        }
    }, 10000); 
}) 


client.on('message', msg => {
    if(msg.content == "!info") {
        msg.delete()
        if(msg.member.id == "332594189911195649") {
        const embed1 = new Discord.MessageEmbed()
            .setTitle("➤ \\⏰ **__Date & Version__**")
            .setDescription("**▸ The tournament will take place on:** To be Announced\n \n **▸ This tournament will take place on minecraft version 1.17.1 - Java Edition**\n")
            .setColor(10763775)

            msg.channel.send({embed: embed1});
        const embed2 = new Discord.MessageEmbed()
            .setTitle("➤ \\🏆 **__Want to participate?__**")
            .setDescription("**▸ Signups will open on __14th of August, 2021__**\n \n **▸ Only 8 teams can play in the event so sorry if your team doesn't get picked..**\n")
            .setColor(10763775)


            msg.channel.send({embed: embed2});

        const embed3 = new Discord.MessageEmbed()
            .setTitle("➤ \\📰 **__You can find more informations in the Guidebook__**")
            .setDescription("**▸** https://www.lukynka.cz/sh/edrt-gb/")
            .setColor(10763775)


            msg.channel.send({embed: embed3});
    }
}
})

client.on('message', msg => {
    if(msg.content == "!rules") {
        msg.delete()
        if(msg.member.id == "332594189911195649") {
        const embed1 = new Discord.MessageEmbed()
            .setTitle("➤ \\📋 **__Rules__**")
            .setDescription("**▸** **No Teaming with other teams**\n \n **▸** **No cheating, or any of that kind** (Use Lunar Client if possible)\n \n **▸** **No use of glitches/bugs permitted** (Example: 1.17.1 Anvil Item Duplication Glitch)\n \n **▸** **Do not watch the main stream, this is considered cheating!** (https://www.twitch.tv/lnterz)\n \n **▸** **You are not allowed to log off during combat**\n \n **▸** **Client Side mods that tell you other player information is not allowed** (Example: Minimap mod that shows other players.. Again, play on Lunar Client if possible)\n")
            .setColor(10763775)

            msg.channel.send({embed: embed1});
    }
}
})



client.on('message', msg => {
    if(msg.content == "!chat") {
        msg.delete()
        if(msg.member.id == "332594189911195649") {
        const embed1 = new Discord.MessageEmbed()
            .setTitle("➤ \\📋 **__Chat__**")
            .setDescription("**▸** **Event discussion, ideas, predictions etc. can be found on Interz's discord server.. This server is only for participants and announcements!**")
            .setColor(10763775)

            msg.channel.send({embed: embed1});
            msg.channel.send("https://discord.gg/ZHyJ2BRAev")
    }
}
})


client.on('guildMemberAdd', member => {
    member.roles.add('872233757166411806');
    const embed = {
        "title": "➤ **__Hello__!** 👋",
        "description": "\nWelcome, **" +member.user.username +"** to the Ender Dragon Race participant discord server!\n\n You can find how to sign up and general informations about the event in channel <872225295703351298>. Dont forget to read the rules in channel <#872222511432089660>.\nEnjoy your stay!\n\n",
        "color": 9442302,
        "thumbnail": {
          "url": "https://media.discordapp.net/attachments/864278902515302440/865339881387589702/Minecraft_Ender_Dragon_Logo.png"
        }
      };
      member.send({ embed });
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  



function setActivity(Name, State) {
    client.user.setPresence({
        status : "online",
        activity : {
            name : Name,
            type : State,
        }
    })
}



client.login(process.env.TOKEN);