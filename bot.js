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
اما ذا السيرفر الاسطوري مدري اش اقولك والله والله
لو مادخلت السيرفر ذا انت خسراان خالص
10Invite = 1x FullAccess !!!!!!!!!! تخيل
25Invite = 3x FullAcess
50Invite = 5x FullAccess
100Invite = 10x FullAcess + OptfineCape تخيل !!!!!!!!
                               [ https://discord.gg/yQKbtNJ ]
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})
client.login(process.env.BOT_TOKEN);
