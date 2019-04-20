const Discord = require('discord.js')
const bot = new Discord.Client()

var prefix = ('*')


bot.on('ready', function () {
    bot.user.setGame('création de bot Discord').catch(console.error) 
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
		message.channel.sendMessage("Bot créer le _20/04/2019_ à _18h00");
		console.log("Commande éffectuée");
	}

	if(message.content === prefix + "fabriquant"){
		message.channel.sendMessage("Le bot à été créé par Desnoc");
		console.log("Commande éffectuée");
	}
});
 
bot.login(process.env.TOKEN)
