const {Composer} =require('micro-bot')
// var TelegramBot=require("node-telegram-bot-api");
// var token ="1213790461:AAH8-j4nOsCd-s3ZD5LP_Pv_QtzbcJDL8fA"
// var bot=new TelegramBot(token,{polling:true});
var bot = new Composer()
var request=require("request")

bot.start((msg) => {
    const chatId = msg.chat.id;

  
    // send a message to the chat acknowledging receipt of their message
    msg.reply("Hi ! This is a  vaccine bot 18+ for  alwar. It will alert you when 18+ vaccine is available in your area. Thanks Prashant");
    //debug error
    // bot.on("polling_error", (msg) => console.log(msg));
   

    const temprature=()=>{
        // bot.sendMessage(chatId,"https://uat.alpha5.io/#/")
        request(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=301001&date=15-05-2021`,function(error,response,body){
        if(!error && response.statusCode==200){
            var res=JSON.parse(body)
            const dat=res.centers.map(data=>{if(data.sessions[0].min_age_limit == 18 ){
                  data.sessions[0].available_capacity == 0?msg.reply(data.address):null
                // bot.sendMessage(chatId, data.sessions[0].available_capacity != 0?data?.address?data.address:null:null)
            }
           
         
        })
            console.log(dat);
            // bot.sendMessage(chatId,dat)
            // bot.sendMessage(chatId,`Your Current temprature is:\n${res.data[0].temp} Degree Celsius`)
        }
    })
    }
    // setTimeout(temprature, 1000);
   
    setInterval(temprature, 3500);
    // temprature()
  });

  module.exports=bot;
