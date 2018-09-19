const Discord = require('discord.js');
const client = new Discord.Client();

console.log("BOT ONLINE");
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم 
تكفا طلبت تكفا والله ابي فلوس
وطبعا وش يعطون ؟
15 انفايت = 
30 الف كريدت وزيدة روح اتفرج وشوف
                               [ https://discord.gg/DX8uDMQ ] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})
client.login(process.env.BOT_TOKEN);
