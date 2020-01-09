const Discord = require("discord.js");
const { prefix, token } = require("./config.json");
//creating an instance of discord
const client = new Discord.Client();

let date = new Date();
let botInfo = { name: "MorrieBot", age: "1 day", hobbies: "botstuff" };

client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", message => {
  console.log(message.content);

  if (message.content.startsWith(`${prefix}time`)) {
    message.channel.send(date.toString());
    message.channel.send(botInfo.hobbies);
  }

  if (message.content.startsWith(`${prefix}MorrieBot`)) {
    message.channel.send("Hello, I am MorrieBot. Please leave me alone");
  }
});

client.login(token);
