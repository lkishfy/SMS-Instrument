const http = require('http');
const express = require('express');
const app = express();
const accountSid = '';
const authToken = '';
const twilioNumber = require('twilio')(accountSid, authToken);
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
const MessagingResponse = require('twilio').twiml.MessagingResponse;

//INITIALIZE VARIABLES

var osc = require('node-osc');
var client = new osc.Client('70.166.149.240', 1337);
var firstNumber = true;
var counter = 0;
var firstUser = true;
var newVariable;
var numArray = [];
var notes = ["a", "b", "c", "d","e","f"];
var sendMessage;

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();
  var lastMessage = req.body.Body;

if (firstUser == true){
  twiml.message("You are the first user");
  firstUser = false;
}else{
  twiml.message(sendMessage);
}

sendMessage = lastMessage;



  var pickRandomNote = notes[Math.floor(Math.random() * notes.length)];
  client.send(pickRandomNote);


    // console.log(req.body.Body);
    // console.log(req.body.From);

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337');
});
