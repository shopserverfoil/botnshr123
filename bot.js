const Discord = require('discord.js');
const client = new Discord.Client();

console.log("BOT ONLINE");
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم 
ادخل شوف اش يعطون
قيف اويات اسبوعية ومش اي قيف اويات كلوا فل اكسس وفل داتا يلد
ادخل واستمتع معانا
                               [ https://discord.gg/DX8uDMQ ] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})
client.login(process.env.BOT_TOKEN);
