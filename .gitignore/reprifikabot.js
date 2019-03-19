const Discord = require('discord.js')
const bot = new Discord.Client()
const Google = require('./commands/google.js')
const Youtube = require('./commands/youtube.js')
 
 
 
 
bot.on('ready', function () {
    bot.user.setGame('création de bot Discord').catch(console.error) 
})
 
bot.on('guildMemberAdd', function (member) {
    member.createDM().then(function (channel) {
        return channel.send('Bienvenue sur le ce discord mon très cher ami :wink: :grin:' + member.displayName)
 
    }).catch(console.error)
})
 
 
 
bot.on('message', function (message) {
    if (message.content === '!help') {
        message.channel.send('liendemapageweb')
    }
})
 
 
 
bot.on('message', function (message) {
    if (Youtube.match(message)) {
        return Youtube.action(message)
    }
    if (message.content === 'r!help') {
        message.channel.send('Le prefix est : r! : kisaru; reprifika; web')
    }
})
 
 
 
bot.on('message', function (message) {
    if (message.content === 'r!kisaru') {
        message.channel.send('https://www.youtube.com/channel/UCAdr3amBpfsqP7ojSJkbZfA')
    }
})
 
bot.on('message', function (message) {
    if (message.content === 'r!reprifika') {
        message.channel.send('')
    }
})
 
 
bot.on('message', function (message) {
    if (message.content === 'r!web') {
        message.channel.send('')
    }
})
 
bot.on('message', function (message) {
    if (message.content === '') {
        message.channel.send('')
    }
})
 
 
 
bot.on('message', function (message) {
    if (message.content === '') {
        message.channel.send('')
    }
})
 
 
bot.on('message', function (message) {
    if (message.content === '') {
        message.channel.send('')
    }
})
 
 
bot.on('message', function (message) {
    if (message.content === '') {
        message.channel.send('')
    }
})
 
 
 
bot.on('message', function (message) {
    if (message.content === '') {
        message.channel.send('')
    }
})
 
 
bot.on('message', function (message) {
    if (Google.match(message)) {
        return Google.action(message)
    }
})

Bot.on("message", async message => {

    if(command === "r!mute"){
  
      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas les droits pour muter un utilisateur !");
  
      let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
      if(!toMute) return message.channel.send("Merci d'entrer un utilisateur !");
      let role = message.guild.roles.find(r => r.name === "Utilisateurs mutés");
      if(!role){
        try {
          role = await message.guild.createRole({
            name: "Utilisateurs mutés",
            color:"#000000",
            permissions:[]
          });
  
          message.guild.channels.forEach(async (channel, id) => {
            await channel.overwritePermissions(role, {
              SEND_MESSAGES: false,
              ADD_REACTIONS: false
            });
          });
        } catch (e) {
          console.log(e.stack)
        }
      }
  
      if(toMute.roles.has(role.id)) return message.channel.send('Cet utilisateur est déjà muté !');
  
      await(toMute.addRole(role));
      message.channel.send("Je l'ai muté !");
    }
    
})
 
bot.login('NTU3MTA2OTUxNzQ2NzQ4NDI2.D3LByg.ExSdZHOdFJGD2zf7CKW3DQO7mGM')
