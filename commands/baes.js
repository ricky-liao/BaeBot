const { DiscordAPIError, MessageAttachment } = require("discord.js");

module.exports = {
    name: 'baes',
    description: "sends bae group photo",
    execute(message, args) {
        var minimum = 1;
        var maximum = 7;
        var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        var imagename = "./images/" + randomnumber + ".jpg";
        try {
            message.channel.send(new MessageAttachment(imagename));
        } catch (error) {
            console.error(error);
        }
    }
}