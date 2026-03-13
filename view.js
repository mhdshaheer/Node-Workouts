const express = require('express');
const app = express();

app.set('view engine','ejs');
// app.set('views','viewTo');
app.listen(3000);

app.get('/',(req,res)=>{
    res.render('viewTo',{
        msg1 : 'hellooooo',
        msg2 : 'welcome all...'
    })
});

app.get('/about',(req,res)=>{
    res.render('about');
});

app.get('/contact',(req,res)=>{
    res.render('contact');
});