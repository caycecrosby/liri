var Twitter = require('twitter');

var getKeys= require("./keys.js");

// send keys
var twitterClient = new Twitter(getKeys.twitterKeys)

//get
var parameters = {
screen_name: "kcoder7",
count: "20"}

twitterClient.get("statuses/user_timeline",parameters, function(error, tweets, response){
    console.log(tweets)

}
)




