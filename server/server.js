const path = require('path');//to clean the path
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage, generateLocationMessage} = require('./utils/message');
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

  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New User Joined'));

  socket.on('createMessage', (newMessage, callback) => {
    console.log('createMessage: ', newMessage);
    io.emit('newMessage', generateMessage(newMessage.from, newMessage.text));
    callback('This is from the Server.');
  });

  socket.on('createLocationMessage', (coords) => {
    io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude));
  });
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(port, () => {
  console.log(`Started up at port ${port}`);
});
