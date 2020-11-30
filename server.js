const gatchmon = require("./gatchmon/gatchmon.js");
const client = new gatchmon({ fetchAllMembers: true });
require("./gatchmon/modules.js")(client);
require("./gatchmon/events.js")(client);
const express = require("express");
const path = require("path");
const app = express();
const Discord = require("discord.js");


client.package = require("./package.json");
client.nodefetch = require("node-superfetch");
client.fetch = require("node-fetch");
client.on("warn", console.warn);
client.on("error", console.error);
client.login(process.env.TOKEN);

const http = require('http');
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);