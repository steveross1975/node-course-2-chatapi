const path = require('path');//to clean the path
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

//const bodyParser = require('body-parser');

const publicPath = path.join(__dirname, '../public');

const port = process.env.PORT || 3000;

const indexPath = publicPath + '/index.html';

var app = express();
var server = http.createServer(app);

var io = socketIO(server);

//app.use(bodyParser.json()); //to send JSON to the Express app
app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');


  socket.on('createMessage', (newMessage) => {
    console.log('createMessage: ', newMessage);
    io.emit('newMessage', {
      from: newMessage.from,
      text: newMessage.text,
      createdAt: new Date().getTime()
    });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(port, () => {
  console.log(`Started up at port ${port}`);
});
