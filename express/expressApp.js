const express = require('express');

//express app
const app = express();

app.listen(3000,()=>{
    console.log('processing...');
});

app.get('/',(req,res)=>{
    res.send('<p>Hello All..</p>');
});

app.get('/about',(req,res)=>{
    res.send('<p>About Page</p>');
})
