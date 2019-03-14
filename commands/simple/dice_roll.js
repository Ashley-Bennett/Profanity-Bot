const Commando = require("discord.js-commando")

class DiceRollCommand extends Commando.Command{
    constructor(client){
        super(client,{
            name: "roll",
            group: "simple",
            memberName: "roll",
            description: "rolls a six sided die"
        })
    }

    async run(message, args){
        let chance = Math.floor((Math.random() * 6)+1)
        message.reply("Your got a " + chance)
    }
}

module.exports = DiceRollCommand