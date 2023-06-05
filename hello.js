const express = require('express');
const hello= express();
hello.set(`view engine`,`pug`);
hello.set(`views`,`./views`);
hello.get('/',(req,res)=>{
    return res.render(`pugTest`);
})
hello.get('*',(req,res)=>{
    return res.render(`pugError`);
})
hello.listen(3000,()=>{
    console.log('listening for a request in port 3000');
})