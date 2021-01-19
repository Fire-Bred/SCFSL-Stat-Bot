module.exports = {
    name: 'weather',
    description: "This command will select a random weather for you",
    execute(message, args){
        const weatherroll = Math.floor(Math.random() * 10) + 1;
        if(weatherroll == 1){
            message.channel.send("Cloudy " + weatherroll)
        } else if(weatherroll == 2){
            message.channel.send("Sunny " + weatherroll)
        } else if(weatherroll == 3){
            message.channel.send("Snow " + weatherroll)
        } else if(weatherroll == 4){
            message.channel.send("Rainy " + weatherroll)
        } else if(weatherroll == 5){
            message.channel.send("Cloudy " + weatherroll)
        } else if(weatherroll == 6){
            message.channel.send("Sunny " + weatherroll)
        } else if(weatherroll == 7){
            message.channel.send("Rainy " + weatherroll)
        } else if(weatherroll == 8){
            message.channel.send("Sunny " + weatherroll)
        } else if(weatherroll == 9){
            message.channel.send("Sunny " + weatherroll)
        } else if(weatherroll == 10){
            message.channel.send("Cloudy " + weatherroll)
        }
    }
}