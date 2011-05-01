// require modules
var http = require("http");


// define modules
function start() {
	function onRequest(request, response) {
		console.log("Request received.");
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write("Hello World, the is Node Beginner");
		response.end();
	}
	
	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");

}

// export modules
exports.start = start;

