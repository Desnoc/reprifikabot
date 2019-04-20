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

/*Kick*/
client.on('message',message =>{
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'kick'){
       if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas kick cet utilisateur :x:")
       if (!member.kickable) return message.channel.send("Je ne peux pas exclure cet utilisateur :sunglass:")
       member.kick()
       message.channel.send("**"+member.user.username + '** a été exclu :white_check_mark:')
    }
});
 
/*Ban*/
client.on('message',message =>{
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'ban'){
       if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas bannir cet utilisateur :x:")
       if (!member.bannable) return message.channel.send("Je ne peux pas bannir cet utilisateur :sunglass:")
       message.guild.ban(member, {days: 7})
       message.channel.send("**"+member.user.username + '** a été banni :white_check_mark:')
    }
});
 
bot.login(process.env.TOKEN)
