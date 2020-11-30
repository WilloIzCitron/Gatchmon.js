exports.run = async (client, message, args) => {
  if (!client.config.developers.includes(message.author.id))
    return message.reply("Only **Developer** can use this command");
  message.channel.send("Restarted")
  process.exit(1);
};

exports.help = {
  name: "reset",
  description: "reset a bot",
  usage: "",
  example: ""
};

exports.conf = {
  aliases: ["restart"],
  cooldown: 3
};
