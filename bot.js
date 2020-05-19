// require('dotenv').config();
// process.env.NTBA_FIX_319 = 1;
//process.env["NTBA_FIX_319"] = 1;
// const config=require("config");
// Promise.config({
//     cancellation: true,
//   });
var TelegramBot=require("node-telegram-bot-api");
var token ="1213790461:AAH8-j4nOsCd-s3ZD5LP_Pv_QtzbcJDL8fA"
var bot=new TelegramBot(token,{polling:true});
var request=require("request")
// process.env.NTBA_FIX_319 = 1;
// bot.onText(/\/"message"(.+)/,function(msg,match){
//     var chatId=msg.chat.id;
//     var echo=match[1];
//     bot.sendMessage(chatId,echo);
// })
// const temprature=()=>{
 
//     request(`https://api.weatherbit.io/v2.0/current?city=Delhi,India&key=ff82cc414a2f4cc2a4af566a308b25e7`,function(error,response,body){
//     if(!error && response.statusCode==200){
//         var res=JSON.parse(body)
//         bot.sendMessage(chatId=816160224,"Result:\n"+res.data[0].temp)
//     }
// })
// }
// setInterval(temprature, 5000);




bot.on('message', (msg) => {
    const chatId = msg.chat.id;

  
    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'Welcome to a Temprature Bot');
    bot.on("polling_error", (msg) => console.log(msg));
   

    const temprature=()=>{

        request(`https://api.weatherbit.io/v2.0/current?city=Delhi,India&key=abd3cdb8480e4f9ab34895448546b609`,function(error,response,body){
        if(!error && response.statusCode==200){
            var res=JSON.parse(body)
            bot.sendMessage(chatId,`Your Current temprature is:\n${res.data[0].temp} Degree Celsius`)
        }
    })
    }
    setTimeout(temprature, 1500);
   
    setInterval(temprature, 3600000);
  });
