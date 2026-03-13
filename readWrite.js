const fs = require("fs"); //file system

const textFs = fs.readFileSync('./demo.txt','utf-8'); //read file
//utf-8 is encoding

const content = `hello razi how are you .... `

fs.writeFileSync('./output.txt',content); //write file
