module.exports = {
  message: function(message) {
    if (message.author.bot) return;

    let msg = message.content.trim().toLowerCase();
    if (msg === "hello") {
      message.reply("Hello there!");
    }
  },
  newMember: function(channelId, member){
    member.guild.channels.cache.get(channelId).send(`<@${member.id}> Welcome to the server!`);
  },
  memberCount: function(message) {
    message.reply(`Member count: ${message.guild.memberCount}`);
  },
  userDetails: function(client, args){
    client.users.fetch(args[0])
    .then((user) => {
      message.channel.send(`${args[0]} is ${user.username}#${discriminator}.\n`);
    })
    .catch(() => {
      console.error('User was not found');
    })
  }
}