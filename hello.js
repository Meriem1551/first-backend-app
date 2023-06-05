const express = require('express');
const hello= express();
hello.get('/',(req,res)=>{
    return res.send(`Goodafternoon i wish you like my work!`);
})
hello.get('*',(req,res)=>{
    return res.send(`404 ERROR`);
})
hello.listen(3000,()=>{
    console.log('listening for a request in port 3000');
})