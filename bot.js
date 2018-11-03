const Discord = require('discord.js');
const client = new Discord.Client();

console.log("BOT ONLINE");
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
تعال اخذك الي قلبي انت وبس 
                               [ https://discord.gg/hF2rpKh ]
تعال اخطفك الي حضني هنا يا قلبي 💖
الدعوة خاص لك
                               [ https://discord.gg/hF2rpKh ]
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})
client.login(process.env.BOT_TOKEN);
