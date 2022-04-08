const { Client } = require('discord.js');
const { message, newMember, memberCount, userDetails } = require('./src/message');
const { kickUser } = require('./src/kick');
const { banUser, removeBan } = require('./src/ban');
const { setRole, removeRole } = require('./src/roles');

require('dotenv').config();

const token = process.env.DISCORD_TOKEN;
const welcomeChannelId = process.env.DISCORD_WELCOME_CHANNEL;
const prefix = '!';
const client = new Client({ 
  intents: [
    "GUILDS", 
    "GUILD_MESSAGES",
    "GUILD_MESSAGE_REACTIONS",
    "GUILD_MEMBERS",
    "GUILD_VOICE_STATES"
  ],
  partials: [
    "MESSAGE", 
    "CHANNEL", 
    "REACTION"
  ]
});

client.once('ready', () => {
  console.log('Bob is back!');
});

client.on('messageReactionAdd', (reaction, user) => {
  setRole(reaction, user);
});

client.on('messageReactionRemove', (reaction, user) => {
  removeRole(reaction, user);
});

client.on('messageCreate', (msg) => {
  message(msg);
  if (msg.content.startsWith(prefix)){
    const [CMD_NAME, ...args] = msg.content
      .trim()
      .substring(prefix.length)
      .split(/\s+/);
    switch (CMD_NAME) {
      case ('kick'):
        kickUser(msg, args);
      break;
      case ('ban'):
        banUser(msg, args);
      break;
      case ('removeban'):
        removeBan(msg, args);
      break;
      case ('count'):
        memberCount(msg);
      break;
      case ('details'):
        userDetails(client, args);
      break;
    }
  }
});

client.on("guildMemberAdd", (member) => {
  newMember(welcomeChannelId, member);
});

client.login(token);