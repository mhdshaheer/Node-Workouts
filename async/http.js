const http = require('http');//for server creation

//STEP 1: CREATE A SERVER
//it return a surver object
const server = http.createServer((request, response) => {
    response.write("<h1>hello from server</h1>")
    response.end("<h1>hello from server</h1>")
    console.log('A new request recieved..');
    // console.log(request);
    // console.log(response);

});

//STEP 2: START THE SERVER
//port number 8000
//local host 127.0.0.1
server.listen(8000, `127.0.0.1`, () => {
    console.log("server has started...");
});