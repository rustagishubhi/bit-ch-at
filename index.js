var app = require('http').createServer(response);
var fs = require('fs');
var io = require('socket.io') (app);

app.listen(3000);
console.log("App running…");


function response(req, res) {
	var file = "";
	if(req.url == "/"){
		file = __dirname + '/index.html';
	} else {
		file = __dirname + req.url;
	}

	fs.readFile(file, function(err, data){
		if(err){
			res.writeHead(500);
			return res.end('Page Not Found');
		}

		res.writeHead(200);
		res.end(data);
	});
}