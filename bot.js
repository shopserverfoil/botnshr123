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
15Invite = 12k Credits ProBot
30Invite = 25k Credits ProBot
وزيادة....
                               [ https://discord.gg/p6EAC2y ]
اما ذا السيرفر الاسطوري مدري اش اقولك والله والله
لو مادخلت السيرفر ذا انت خسراان خالص
سيرفر اسطوري والله لو دخلت بتصير $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
مرا والله ادخل وشوف بس يرجال
50Invite = Nitro تخيللللللللللللللللللللللللللللل
                               [ https://discord.gg/w6uUMH3 ]
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})
client.login(process.env.BOT_TOKEN);
