module.exports = {
  kickUser: function(message, args) {
    if (!message.member.permissions.has('KICK_MEMBERS')) {
      return message.reply('You do not have permissions to use the command');
    }
    if (args.length > 0) {
      message.guild.members.fetch(args[0])
        .then(() => {
          message.guild.members.kick(args[0])
          .then((banInfo) => {
            console.log(`Kicked ${banInfo.user?.tag ?? banInfo.tag ?? banInfo}`);
            message.channel.send(`${banInfo.tag} was kicked.`);
          })
          .catch((err) => {
            console.error(err);
            message.channel.send('I do not have permissions to kick');
          })
        })
        .catch((err) => {
          console.log(err);
          message.channel.send('User was not found');
        })
    } else {
      message.reply('User ID required');
    }
  }
}