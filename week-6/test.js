const fs = require('fs');

const readFile = fs.readFile('./demo.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})
// console.log(readFile)