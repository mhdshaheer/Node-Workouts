const fs = require('fs');
const readStream = fs.createReadStream('./dd.txt','utf-8');

readStream.on('data',(chunk)=>{
    console.log("-------CHUNK SET---------");
    console.log(chunk);
});

// const writeStream = fs.createWriteStream('./ddOut.txt');
// readStream.pipe(writeStream);