const fs = require('fs');
const http = require('http');
const myHtml = fs.readFileSync("./index.html","utf-8");

const server = http.createServer((request, responds) => {

    let path = request.url;
    if (path === '/' || path.toLowerCase() === '/home') {
        responds.writeHead(200,{
            'Content-Type' : 'text/html',
            'my-header' : 'hai all', //custom header(i created)
            //network -> header -> responds header
        });
        responds.end(myHtml.replace('{{%CONTENT%}}','Now it is in home page'));
    } else if (path.toLowerCase() === '/about') {
        responds.writeHead(200);
        responds.end(myHtml.replace('{{%CONTENT%}}','Now it is in about page'));
    } else if (path.toLowerCase() === '/contact') {
        responds.writeHead(200);
        responds.end(myHtml.replace('{{%CONTENT%}}','Now it is in contact page'));
    } else {
        responds.writeHead(404);
        responds.end(myHtml.replace('{{%CONTENT%}}','Error 404 : Page is not found'));
    }
});
server.listen(8000, '127.0.0.1', () => {
    {
        console.log('listening...');
    }
})