module.exports = {
  banUser: function(message, args) {
    if (!message.member.permissions.has('BAN_MEMBERS')) {
      return message.reply('You do not have permissions to use the command');
    }
    if (args.length > 0) {
      message.guild.members.ban(args[0])
        .then(() => {
          console.log(`Banned ${args[0]}`);
          message.channel.send(`User ${args[0]} was banned`);
        })
        .catch((err) => {
          console.error(err);
          message.channel.send('Ban failed, reason: ' + err.message);
        })
    } else {
      message.reply('User ID required');
    }
  },
  removeBan: function(message, args) {
    if (!message.member.permissions.has('BAN_MEMBERS')) {
      return message.reply('You do not have permissions to use the command');
    }
    if (args.length > 0) {

      message.guild.members
        .unban(args[0])
        .then((user) => {
          console.log(`${args[0]} ban removed`);
          message.channel.send(`User ${args[0]} ban is removed`);
        })
        .catch((err) => {
          console.error(err);
          message.channel.send('Please specify a valid user id');
        });
      
    } else {
      message.reply('User ID required');
    }
  }
}