var  http = require('http');
var fs = require('fs');

http.createServer(function(request , response){

	var url = request.url;
	
	switch(url){

		case '/':

		getStaticFileConten(response, 'public/home.html','text/html')
		break;

		case '/about':

		getStaticFileConten(response, 'public/about.html','text/html')
		break;

		case '/contact':

		getStaticFileConten(response, 'public/contact.html','text/html')
		break;

		default:
		response.writeHead(404, {'Content-Type': 'text/plain'});
		response.end('404 - Page not found');


	}

}).listen(8080);

console.log('Servidor Rodando em http://localhost:8080');

function getStaticFileConten(response, filepath, contentType){
	fs.readFile(filepath, function(error, data){
		if(error){
			response.writeHead(500, {'Content-Type': 'text/plain'});
				response.end('500 - Internal Server Error');
		}

		if(data){

			response.writeHead(200,{'Content-Type':'text/html'});
			response.end(data);
		}
	});
}