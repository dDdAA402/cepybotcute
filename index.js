const Discord = require('discord.js');
const bot = new Discord.Client();



const PREFIX = '!';


bot.on('ready', () =>{
    console.log('This bot is online!');
    bot.user.setActivity('Moderating | !help', { type: 'PLAYING'}).catch(console.error);
    
      
    
})

const { Client, MessageEmbed } = require('discord.js');

// Create an instance of a Discord client
const client = new Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  
});

// at the top of your file


// inside a command, event listener, etc.
client.on("message", msg=>{
if(msg.content.toLowerCase() == '!help') {
const exampleEmbed = new Discord.MessageEmbed()
    .setColor('00FCFB')
    
    .setURL('https://discord.js.org/')
    .setAuthor('Commands', '')
    
    .setThumbnail('https://cdn.discordapp.com/attachments/714394594518761498/725703002836697148/Untitled_Design_15.png')
    .addFields(
        { name: 'Moderation Commands', value: '`!kick` Kick the following user, usage !kick (username) (reason) \n `!ban` Ban the following user, usage !ban (username) (reason) \n  `!pleaseplay` Play with the bot if you want \n  `!warn` Warn a player, usage !warn (username) (reason) \n `!meme` Shows you a meme, will show you same meme' },
        { name: '\u200B', value: '\u200B' },
        { name: 'Other commands', value: '`!info` Info about the bot version \n `!infobot` Info about the bot \n `!invite` Invite the bot \n `!prefix` Shows you the the current prefix of the bot', inline: true },
        
    )
    
    
    .setTimestamp()
    .setFooter('Bot made by Jeceles#4624')

  msg.channel.send({embed: exampleEmbed})
}
})
    
    
    
 
  


client.login('NzI5MjY2MDE3MTg4MTg0MDc0.Xwx6lQ.7yorUEwhVUL1HjziFT4jZtsfxcU');


// Create an instance of a Discord client


/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  
});

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // If the message content starts with "!kick"
  if (message.content.startsWith('!kick')) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            // We let the message author know we were able to kick the person
            message.reply(` ${user.tag} has been kicked!`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to kick the member');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("That user isn't in this guild!");
      }
      // Otherwise, if no user was mentioned

      




    } else {
      message.reply("You didn't mention the user to kick!");
    }
  }
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login('NzI5MjY2MDE3MTg4MTg0MDc0.Xwx6lQ.7yorUEwhVUL1HjziFT4jZtsfxcU');

client.on('ready', () => {
    
  });
  
  client.on('message', message => {
    // Ignore messages that aren't from a guild
    if (!message.guild) return;
  
    // if the message content starts with "!ban"
    if (message.content.startsWith('!ban')) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      // Assuming we mention someone in the message, this will return the user
      // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
      const user = message.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Ban the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           * Read more about what ban options there are over at
           * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
           */
          member
            .ban({
              reason: 'They were bad!',
            })
            .then(() => {
              // We let the message author know we were able to ban the person
              message.reply(` ${user.tag} has been banned!`);
            })
            .catch(err => {
              // An error happened
              // This is generally due to the bot not being able to ban the member,
              // either due to missing permissions or role hierarchy
              message.reply('I was unable to ban the member');
              // Log the error
              console.error(err);
            });
        } else {
          // The mentioned user isn't in this guild
          message.reply("That user isn't in this guild!");
        }
      } else {
        // Otherwise, if no user was mentioned
        message.reply("You didn't mention the user to ban!");
      }
    }
  });
  
  // Log our bot in using the token from https://discordapp.com/developers/applications/me
  client.login('NzI5MjY2MDE3MTg4MTg0MDc0.Xwx6lQ.7yorUEwhVUL1HjziFT4jZtsfxcU');

  client.on('ready', () => {
    
  });
  
  // Create an event listener for new guild members
  client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.cache.find(ch => ch.name === 'invites');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Welcome ${member} to AloneAlts!`);
  });
  
  // Log our bot in using the token from https://discordapp.com/developers/applications/me
  client.login('NzI5MjY2MDE3MTg4MTg0MDc0.Xwx6lQ.7yorUEwhVUL1HjziFT4jZtsfxcU');

  

  

  client.on('message', message => {
    if (message.content === '!pleaseplay') {
      message.channel.send('I heard you wanna play? \n Please type !start to begin!');


    }
  });

  client.on('message', message => {
    if (message.content === '!start') {
      message.channel.send('Okay, time to begin the game! Please choose a number \n between 1-5');
    }
  });

  client.on('message', message => {
    if (message.content === '1') {
      message.channel.send('Okay 1, makes sense -_-');
    }
  });
  client.on('message', message => {
    if (message.content === '2') {
      message.channel.send('2, makes sense too .-.');
    }
  });

  client.on('message', message => {
    if (message.content === '3') {
      message.channel.send('Hekk no, not 3, maybe you like 3 alot');
    }
  });

  client.on('message', message => {
    if (message.content === '4') {
      message.channel.send('Idc if it is 4 whatever');
    }
  });
  
  client.on('message', message => {
    if (message.content === '5') {
      message.channel.send('Really? I hate 5 but whatever.');
    }
  });

  client.on('message', message => {
    if (message.content === 'Are you vibing?') {
      message.channel.send('Yes, any problem idiot?');
    }
  });

  client.on('message', message => {
    if (message.content === '!info') {
      message.channel.send('Bot version is V13');
    }
  });

  client.on('message', message => {
    if (message.content === '!infobot') {
      message.channel.send('This bot is made for moderation commands, fun commands etc.');
    }
  });

  

  client.on('message', message => {
    if (message.content === `!warn ${message.member}`) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      message.channel.send(`${message.member} has been warned.`);
    }
  });

  client.on('message', message => {
    if (message.content === '!meme') {
      message.channel.send('https://cdn.discordapp.com/attachments/693822197709406248/723137436686876702/download_3.jpg');
    }
  });

   client.on('message', message => {
    if (message.content === '!prefix') {
      message.channel.send('The prefix is (!)');
    }
  });

  client.on('ready', () => {
  
  });
  
  // at the top of your file
  
  
  // inside a command, event listener, etc.
  client.on("message", msg=>{
  if(msg.content.toLowerCase() == '!invite') {
  const exampleEmbed = new Discord.MessageEmbed()
      .setColor('00FCFB')
      .setDescription('Invite the bot and subscribe!')
      .setURL('https://discord.js.org/')
      .setThumbnail('https://cdn.discordapp.com/attachments/714394594518761498/725703002836697148/Untitled_Design_15.png')
      .addFields(
          { name: 'Youtube Channel', value: 'https://www.youtube.com/channel/UCw6l7CAXkKQJGcdapqBmiaw?view_as=subscriber' },
          { name: '\u200B', value: '\u200B' },
          { name: 'Invite the bot', value: 'https://discord.com/api/oauth2/authorize?client_id=720938984066383894&permissions=8&scope=bot', inline: true },
      )
     
      
      .setTimestamp()
      .setFooter('Bot made by Jeceles#4624')
  
    msg.channel.send({embed: exampleEmbed})
  }
  })
    
      
      
      
   
    
  
  
  client.login('NzI5MjY2MDE3MTg4MTg0MDc0.Xwx6lQ.7yorUEwhVUL1HjziFT4jZtsfxcU');
  

  

bot.login(process.env.token);


