
//If you want to add numbers in command prompt you ad two numbers

//Example to add two numbers,  values of two number passed through command prompt
var http = require('http');

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  var value1 =  process.argv[2];
  var value2 = process.argv[3];
  var sum = Number(value1) + Number(value2);
  response.end("Sum of two number is = " + " " + sum);
});

server.listen(3000);
console.log("Server running at http://127.0.0.1:3000/");

//run this example
//node example3.js 10 30