const { Client, GatewayIntentBits } = require('discord.js');
const config = {
  token: process.env.BOT_TOKEN,
  guildId: process.env.GUILD_ID,
  targetInviteCode: process.env.INVITE_CODE,
  accessRole: 'knime-pro'
};

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
  ]
});

const inviteCache = new Map();

client.once('ready', async () => {
  const guild = await client.guilds.fetch(config.guildId);
  const invites = await guild.invites.fetch();
  invites.forEach(invite => inviteCache.set(invite.code, invite.uses));
  console.log(`✅ Logged in as ${client.user.tag}`);
  console.log('📥 Invite tracking initialized.');
});

client.on('guildMemberAdd', async (member) => {
  const newInvites = await member.guild.invites.fetch();
  const usedInvite = newInvites.find(inv => inviteCache.get(inv.code) < inv.uses);

  if (usedInvite && usedInvite.code.toLowerCase() === config.targetInviteCode.toLowerCase()) {
    const role = member.guild.roles.cache.find(r => r.name === config.accessRole);
    if (role) {
      await member.roles.add(role);
      console.log(`🎉 Assigned ${config.accessRole} to ${member.user.tag}`);
      await member.send(`Welcome! You've been granted access to **#knime-pro-early-access**\n\n` + `👉 [Click here to go directly to the channel](https://discord.com/channels/1047506504900677662/1397681354690400406)`);
    }
  }

  // Refresh cache
  newInvites.forEach(inv => inviteCache.set(inv.code, inv.uses));
});

client.login(config.token);
