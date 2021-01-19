module.exports = {
    name: 'wind',
    description: "This command will select a random wind speed for you",
    execute(message, args){
        const windspeed = Math.floor(Math.random() * 10) + 1;
        if(windspeed == 1){
            message.channel.send("No Wind " + windspeed)
        } else if(windspeed == 2){
            message.channel.send("Low Winds " + windspeed)
        } else if(windspeed == 3){
            message.channel.send("High Winds " + windspeed)
        } else if(windspeed == 4){
            message.channel.send("High Winds " + windspeed)
        } else if(windspeed == 5){
            message.channel.send("No Wind " + windspeed)
        } else if(windspeed == 6){
            message.channel.send("Low Winds " + windspeed)
        } else if(windspeed == 7){
            message.channel.send("High Winds " + windspeed)
        } else if(windspeed == 8){
            message.channel.send("Low Winds " + windspeed)
        } else if(windspeed == 9){
            message.channel.send("Low Winds " + windspeed)
        } else if(windspeed == 10){
            message.channel.send("No Wind " + windspeed)
        }
    }
}