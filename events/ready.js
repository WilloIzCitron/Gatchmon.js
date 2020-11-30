const db = require("quick.db");
const Discord = require("discord.js");
module.exports = (client, message) => {
  console.log(
    client.user.tag +
      " already operational, help with " +
      client.commands.size +
      " commands " +
      client.users.cache.size +
      " users | " +
      client.guilds.cache.size +
      " guilds | " +
      client.channels.cache.size +
      " channels"
  );

  client.user.setActivity(
    client.config.Maintenance ? "MAINTENANCE.." : null
  );
};
