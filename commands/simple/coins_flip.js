const Commando = require("discord.js-commando")

class CoinFlipCommand extends Commando.Command{
    constructor(client){
        super(client,{
            name: "flip",
            group: "simple",
            memberName: "flip",
            description: "flips a coin"
        })
    }

    async run(message, args){
        let chance = Math.floor(Math.random() * 2)
        if (chance == 0){
            message.reply("your coin landed on heads")
        } else {
            message.reply("your coin landed on tails")
        }
    }
}

module.exports = CoinFlipCommand