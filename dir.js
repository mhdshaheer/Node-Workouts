// console.log(__dirname);
// console.log(__filename);

const fs = require('fs');


//if(!fs.existsSync('./razi')){
    fs.rmdir('./razi',(err,data)=>{
        if(err){
            console.log(err);
        }
        console.log("success");
    })
// }

/**
 * "rmdir"  delete directory.
 * "unlink" delete files. 
 */