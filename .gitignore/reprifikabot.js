const Discord = require('discord.js')
const bot = new Discord.Client()

var prefix = ('*') 

const channelID = '571343909947703306';


bot.on('ready', function () {
    bot.user.setGame('créer des bots Discord').catch(console.error) 
})
 
bot.on('guildMemberAdd', function (member) {
    member.createDM().then(function (channel) {
        return channel.send('Bienvenue sur le ce discord mon très cher ami :wink: :grin:' + member.displayName)
 
    }).catch(console.error)
})

bot.on("message", message => {
	if(message.content === prefix + "help"){
		message.channel.sendMessage("Liste des commandes : *tt* **/** *fabriquant*");
	}

	if(message.content === prefix + "tt"){
		message.channel.sendMessage("Bot créer le _20/04/2019_ à _18h00_");
		console.log("Commande éffectuée");
	}

	if(message.content === prefix + "fabriquant"){
		message.channel.sendMessage("Le bot à été créé par Desnoc");
		console.log("Commande éffectuée");
	}
});
bot.on('message', message => {
    if (!message.guild) return;
  
    if (message.content.startsWith('*mute')) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member.mute("Raison facultative à afficher dans les journaux d'audit").then(() => {
            message.reply(`Successfully muted ${user.tag}`);
          }).catch(err => {
            message.reply('Je suis incapable de mettre le membre en sourdine');
            console.error(err);
          });
        } else {
          message.reply("Cet utilisateur n'est pas dans cette guilde!");
        }
      } else {
        message.reply("Vous n'avez pas mentionné l'utilisateur à mettre en sourdine!");
      }
    }
  });

  bot.on('message', message => {
    if (!message.guild) return;
  
    if (message.content.startsWith('*unmute')) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member.unmute("Raison facultative à afficher dans les journaux d'audit").then(() => {
            message.reply(`Successfully unmuted ${user.tag}`);
          }).catch(err => {
            message.reply('Je suis incapable de redonner la parole à ce membre');
            console.error(err);
          });
        } else {
          message.reply("Ce membre n'est plus sur le serveur");
        }
      } else {
        message.reply("Vous n'avez pas mentionné l'utilisateur pour réactiver la parole!");
      }
    }
  });

bot.on('message', message => {
  // Ignore les messages qui ne proviennent pas d'une guilde
  if (!message.guild) return;

  // Si le contenu du message commence par "!Kick"
  if (message.content.startsWith('!kick')) {
  //En supposant que nous mentionnons quelqu'un dans le message, cela va retourner l'utilisateur
  // En savoir plus sur les mentions plus à https://discord.js.org/#/docs/main/stable/class/MessageMentions
    const user = message.mentions.users.first();
    //    Si nous avons un utilisateur mentionné
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member.kick('Optional reason that will display in the audit logs').then(() => {
          // We let the message author know we were able to kick the person
          message.reply(`${user.tag} à été kick avec succès !`);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to kick the member,
          // either due to missing permissions or role hierarchy
          message.reply('Je ne peux pas kick ce membre !');
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        message.reply(`Cet utilisateur n'est pas sur le serveur !`);
      }
    // Otherwise, if no user was mentioned
    } else {
      message.reply(`Vous n'avez pas mentionné l'utilisateur que je devais kick !`);
    }
  }
});


  bot.on('message', message => {
    // Ignore messages that aren't from a guild
    if (!message.guild) return;
  
    // if the message content starts with "!ban"
    if (message.content.startsWith('!ban')) {
      // Assuming we mention someone in the message, this will return the user
      // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
      const user = message.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Ban the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           * Read more about what ban options there are over at
           * https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=ban
           */
          member.ban({
            reason: 'They were bad!',
          }).then(() => {
            // We let the message author know we were able to ban the person
            message.reply(`${user.tag} à été bannis avec succès !`);
          }).catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            message.reply(`Je n'ai pas les permissions pour ban ce membre !`);
            // Log the error
            console.error(err);
          });
        } else {
          // The mentioned user isn't in this guild
          message.reply(`Cet utilisateur n'est pas sur le serveur !`);
        }
      } else {
      // Otherwise, if no user was mentioned
        message.reply(`Vous n'avez pas mentionné l'utilisateur que je devais bannir !`);
      }
    }
  });

bot.on('guildMemberAdd', function (member){
    updateStatut(member.guild);
});

bot.on('guildMemberRemove', function (member){
    updateStatut(member.guild);
});

bot.on('presenceUpdate', function(member){
    updateStatut(member.guild);
});

function updateStatut(guild){
    let max = guild.memberCount-4;
    let online = guild.member.filter(m == m.presence.status != 'offline').size-4;
    let formatString = 'Il y a : ' + online + '/' + max;
    let channel = guild.channels.get('channelID');
    if(channel.name !== formatString){
        channel.setName(formatString);
    } 
}
 
bot.login(process.env.TOKEN)
