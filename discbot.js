const Discord = require("discord.js");
const client = new Discord.Client();



client.on("message", (message) => {
 
  if (message.author.bot) return;

  if (message.content.startsWith("<:dab:399153379412148225>")) {
    message.channel.send("<:dab:399153379412148225>");
  } else
  if (message.content.startsWith("kill")) {
    message.channel.send("niggers");
  }
  
  if(message.content === "who is the best nigger of them all?") {
    message.channel.send("AfricanChildWelfare");
}

if(message.content === "Kill") {
    message.channel.send("Niggers");
}

if(message.content === "help") {
    message.channel.send("Help? HELP?? What sort of bot do you think I am? No one will help you, fool.");
}

if(message.content === "Help") {
    message.channel.send("Help? HELP?? What sort of bot do you think I am? No one will help you, fool.");
}

});

client.login("Mzk3MjE5OTAxNTU2NjU0MDgw.DSs6dQ.MeBaccWdB7396RxbBK_ACJb8EDU");
