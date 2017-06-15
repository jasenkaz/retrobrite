const express = require('express'); //grabbing everything from the folder
const server = express(); //it calls the server

const port = 8080;
//__dirname is node only, its a short cut for looking for files in the working directory
server.use(express.static(__dirname + '/public'));

server.get('/', (request, response) => {
  response.sendFile('public/html/index.html', {root: __dirname});
}); //telling the server what to listen for; fat arrow is the same as writing function(request, response){}
server.listen(port, () => {
  console.log('Now listening on port ', port);
});
