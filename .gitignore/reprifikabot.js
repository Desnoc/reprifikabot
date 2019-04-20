const Discord = require('discord.js')
const bot = new Discord.Client()

var prefix = ('*')


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
		message.channel.sendMessage("Liste des commandes : *tt/ *fabriquant");
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



client.on('message', message => {
    if (!message.guild) return;

    if (message.content.startsWith('*kick')) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member.kick('Optional reason that will display in the audit logs').then(() => {
            message.reply(`Renvoyé avec succès ${user.tag}`);
          }).catch(err => {
            message.reply('Je ne peux pas kick ce membre');
            // Log the error
            console.error(err);
          });
        } else {
          message.reply("Cette personne n'est pas sur le serveur");
        }
      } else {
        message.reply("Vous n'avez mentionné personne");
      }
    }
 
bot.login(process.env.TOKEN)
