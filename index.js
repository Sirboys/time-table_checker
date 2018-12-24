/*const mojang = require('mojang');

*/
var request = require('request');
var date = new Date();
date.setDate(date.getDate()+1);
console.log(date.getDate()+"."+(Math.floor(date.getMonth())+1)+"."+date.getFullYear())
var lastContent = "";
run();
function run() {
  var delay = 60000;
  setTimeout(function() {
    var date = new Date();
    date.setDate(date.getDate()+1);
    var content = httpGet("http://liceum-6.ru/images/4obyhayushimsya/raspisanie/"+date.getDate()+"."+(Math.floor(date.getMonth())+1)+"."+date.getFullYear()+".pdf")
  if (content != lastContent && lastContent != ""){
    var payload = {
      "content": " Updated Time table",
    }
    request.post('https://discordapp.com/api/webhooks/526707740039708682/9kPxpA2NJcbQdp8VzqleLHYQNqP2OwiuCTpEE7_fZVfdGb2m1u1chwcUNM9HOIgQ4hVQ',
      { json: payload },
      function (error, response, body) {
         // console.log(body);
          console.log(response);
          //console.log(response.request.toJSON())
          if (!error && response.statusCode == 200) {
          
          }
      }
    );
  }else{console.log("Изменении в рассписании нет!")}
  lastContent = content;
    run();
  },delay);
}
//console.log(httpGet("http://liceum-6.ru/images/4obyhayushimsya/raspisanie/24.12.2018.pdf"));
function httpGet(theUrl){
    var xmlHttp = null;
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
      xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false);
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
//console.log(1);
/*
var request = require('request');

request.post(
    'https://api.mojang.com/profiles/minecraft',
    { json: [
        "maksimkurb",
        "nonExistingPlayer" //Test for non-existing player
    ] },
    async function (error, response, body) {
        console.log(body);
        console.log(response.toJSON());
        console.log(response.request.toJSON())
        if (!error && response.statusCode == 200) {
        }
    }
);


var payload = {
    "content": " Updated Time table",
  }
request.post('https://discordapp.com/api/webhooks/522748970888462358/e_eDN4uan1gDKLxU0ImCWTFNfHQGdoYcL6-ayLjIzGTUo0cn4MQXVPlgJAF8mtR0P_aY',
    { json: payload },
    function (error, response, body) {
       // console.log(body);
        console.log(response);
        //console.log(response.request.toJSON())
        if (!error && response.statusCode == 200) {
        
        }
    }
);
//var key = response.body.accessToken;

/*

mojang.authenticate("bananajo.nicco@hotmail.it","Abcdefg13")
    .then(session => mojang.getUser(session));
















*/