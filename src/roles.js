module.exports = {
  setRole: function(reaction, user) {
    const { name } = reaction.emoji;
    const member = reaction.message.guild.members.cache.get(user.id);
    if (reaction.message.id === '961567940556259330') {
      switch (name) {
        case '🍌':
          member.roles.add('961565282021830656');
        break;
        case '🍓':
          member.roles.add('961565393690968106');
        break;
        case '🥒':
          member.roles.add('961565611861901312');
        break;
      }
    }
  },
  removeRole: function(reaction, user) {
  const { name } = reaction.emoji;
    const member = reaction.message.guild.members.cache.get(user.id);
    if (reaction.message.id === '961567940556259330') {
      switch (name) {
        case '🍌':
          member.roles.remove('961565282021830656');
        break;
        case '🍓':
          member.roles.remove('961565393690968106');
        break;
        case '🥒':
          member.roles.remove('961565611861901312');
        break;
      }
    }
  }
}