

var http= require("http");

//declaring variables
var num = 10;

var server = http.createServer(function(request,response){
	response.writeHead(200,{"Content-Type":"text/plain"});
	if(num%2 == 0){
		console.log("The given number "+num+" is an even number");
		response.end("The given number "+num+" is an even number");
		//check whether the remainder is equal to zero
	}
	else{
		console.log("The given number "+num+" is an odd number");
		response.end("The given number "+num+" is an odd number");
	}
});

server.listen(3000);
console.log("The server is running at port no:3000 at 127.0.0.1");
