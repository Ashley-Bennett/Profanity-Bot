const Commando = require("discord.js-commando")

class JoinChannelCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "join",
            group: "music",
            memberName: "join",
            description: "Joins voice channel"
        })
    }

    async run(message, args) {
        if (message.member.voiceChannel) {
            if (!message.guild.voiceConnection) {
                message.member.voiceChannel.join()
                    .then(connection => {
                        message.reply("joined")
                    })
            }
        } else {
            message.reply("you must be in a voice channel")
        }

    }
}

module.exports = JoinChannelCommand