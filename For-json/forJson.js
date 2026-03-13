const fs = require('fs');
const http = require('http');


const server = http.createServer((req, res) => {
    let path = req.url;
    const data = fs.readFileSync("./demo.json","utf-8");
    res.writeHead(200,{'Content-Type': 'application/json'});
    res.end(JSON.stringify(data));
    // if (path === '/' || path.toLocaleLowerCase() === '/home') {

       

    //         fs.readFile('./demo.json', 'utf-8', (error, data) => {
    //             // let products = JSON.parse(data)
    //             if(error){
    //                 throw error;
    //             }else{
    //                 res.writeHead(200,{'Content-Type':'application/json'})
    //                 res.write(JSON.stringify(data));
    //             }
    //         });

    //     res.end('hai i am reached...');
    // } else {
    //     res.end('error 404 : not Found');
    // }

});

server.listen(8001, '127.0.0.1', () => {
    console.log('i am running...');
});