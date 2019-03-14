const Commando = require("discord.js-commando")

class LeaveChannelCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "leave",
            group: "music",
            memberName: "leave",
            description: "leaves voice channel"
        })
    }

    async run(message, args) {
        if(message.guild.voiceConnection){
            message.guild.voiceConnection.disconnect()
        } else{
            message.reply("not in a voice channel")
        }
    }
}

module.exports = LeaveChannelCommand