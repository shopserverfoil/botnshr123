const Discord = require('discord.js');
const client = new Discord.Client();

console.log("BOT ONLINE");
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم 
احب اني اقدم لك
اول سيرفر عربي يسوي انفايت ريويرد اسطوري بمعنى الكلمة
ادخل وشوف
لو انت مو مصدق
15Invite = 30k Credits ProBot
30Invite = 45k Credits ProBot
وزيادة....
                               [ https://discord.gg/V7H8Zg6 ] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})
client.login(process.env.BOT_TOKEN);
