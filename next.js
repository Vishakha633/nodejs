const http = require('http');

function dataControl(req,resp){
    resp.write("<h1>Hello this is vishakha this side</h1>");
    resp.end();
}

http.createServer(dataControl).listen(4500);
