///////////////////////////////////////////////////SERVER AND API SETUP
// const http = require('http');
const express = require('express');
const app = express();
const accountSid = '';
const authToken = '';
const twilioNumber = require('twilio')(accountSid, authToken);
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
const MessagingResponse = require('twilio').twiml.MessagingResponse;
var server = require('http').createServer(app);
var io = require('socket.io')(server);
///////////////////////////////////////////////////SERVER AND API SETUP



///////////////////////////////////////////////////INITIALIZE VARIABLES
var osc = require('node-osc');
var client = new osc.Client('70.166.149.240', 1337);
var firstNumber = true;
var counter = 0;
var firstUser = true;
var newVariable;
var numArray = [];
var notes = ["a", "b", "c", "d","e","f"];
var sendMessage;
///////////////////////////////////////////////////INITIALIZE VARIABLES



///////////////////////////////////////////////////SOCKET.IO KEYSTROKE NOTES
io.on ('connection', function (socket) {

  socket.on('a note', function (keycode){
    if (keycode == 49){
      client.send("a");
      console.log("a note");
    }
  });

  socket.on('b note', function (keycode){
    if (keycode == 50){
      client.send("b");
      console.log("b note");

    }
  });

  socket.on('c note', function (keycode){
    if (keycode == 51){
      client.send("c");
      console.log("c note");

    }
  });

  socket.on('d note', function (keycode){
    if (keycode == 52){
      client.send("d");
      console.log("d note");

    }
  });

  socket.on('e note', function (keycode){
    if (keycode == 53){
      client.send("e");
      console.log("e note");
    }
  });

  socket.on('f note', function (keycode){
    if (keycode == 54){
      client.send("f");
      console.log("f note");
    }
  });
});
///////////////////////////////////////////////////SOCKET.IO KEYSTROKE NOTES


///////////////////////////////////////////////////TWILIO
app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();
  var lastMessage = req.body.Body;

  ///Phone call
  // twilioNumber.calls
  //       .create({
  //          url: 'http://demo.twilio.com/docs/voice.xml',
  //          from: '',
  //          to: ''
  //        })
  //       .then(call => console.log(call.sid))
  //       .done();
  ////

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
///////////////////////////////////////////////////TWILIO



///////////////////////////////////////////////////EXPRESS PAGE RENDERING
app.use(express.static(__dirname + '/views'));

server.listen(1337, () => {
  console.log('Express server listening on port 1337');
});


app.get('/', function (req, res) {
  res.sendFile('index.html');
})
///////////////////////////////////////////////////EXPRESS PAGE RENDERING
