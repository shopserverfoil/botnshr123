const Discord = require('discord.js');
const client = new Discord.Client();

console.log("BOT ONLINE");
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم 
لو سمحت ممكن تدخل سيرفرى
                               [ رابط السيرفر ] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})
client.login('التوكين حقك');
