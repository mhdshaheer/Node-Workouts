const readThem = require('readline');

const rl = readThem.createInterface({
    input : process.stdin,
    output : process.stdout,
});
rl.question("Enter your name : ", (myName)=>{
    console.log("name is :"+myName)
    rl.close();
});

rl.on('close',()=>{
    console.log("Interface is closed...");
    process.exit(0);
})