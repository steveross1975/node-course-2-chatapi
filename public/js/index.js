var socket = io();//creates the connection to the socketIO server and stores the response in a variable

socket.on('connect', function () {
  console.log('Connected to server');

});
socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('You have got a new message ', message);
});
