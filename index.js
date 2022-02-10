const Discord = require('discord.js');
const myToken = process.env['BOTTOKEN'];
const myId = process.env['daivyId'];
const bot = new Discord.Client();
const prefix = "$";
const keepAlive = require('./server.js');
bot.login(myToken);
keepAlive();


function botPresence(){
 bot.user.setActivity(`$help | ${bot.guilds.cache.size} servers`, { type: "WATCHING" })
 // bot.user.setActivity(`IN MANUTENZIONE ⚠️`, { type: "PLAYING" })

   numberServer = (`${bot.guilds.cache.size}`, true)
}

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
  botPresence();
});



  bot.on('message', msg => {
    if (msg.content.startsWith(`${prefix}myId`)){
      let Did = msg.author.id;
      console.log(Did);
      msg.reply(`Il tuo userId: ${Did}`);
    }

    bot.on('message', async message => {
    if (message.author.bot) return;
    let mention = message.mentions.users.first()

      if(message.content.startsWith(`${prefix}strike`) && mention){
          message.channel.send(`<@${mention.id}> This is a official notification under Section 512(c) of the Digital Millennium Copyright Act (”DMCA”), and I seek the removal of the aforementioned infringing material from your servers. I request that you immediately notify the infringer of this notice and inform them of their duty to remove the infringing material immediately, and notify them to cease any further posting of infringing material to your server in the future`)
      }
      else if(!message.mention.members){
          }
    });

    if (msg.content.startsWith(`${prefix}help`)){

    var help = new Discord.MessageEmbed()
    .setAuthor('Help:')
    .setDescription(`Prefix :** ${prefix} **\n\nList of useful commands :`)
    .addField('`$createWebhook $myId $strike $help`','\u200B')
    msg.channel.send(help)

    }

    if (msg.content === 'banale') {
      msg.reply('canizzaro');
      // #manutenzine msg.reply(`BOT IN MANUTENZIONE ⚠️`);
      //msg.channel.send('pong'); // manda un messaggio senza menzione
    }
  });
  // crea webhook nel canale del comando inviato
  bot.on("message", message => {
    if (message.content.startsWith(`${prefix}createWebhook`)) {
      message.channel.createWebhook('Daivy WebHook', {
        avatar: `https://i.imgur.com/D5wyCFE.png`,
        reason: 'Daivy Utility Bot'
      })
    .then(wb => message.author.send(`Ecco il tuo WebHook Url ${wb.url}`))
    .catch(console.error)
    message.channel.send('Webhook Creato!');
    }
  });