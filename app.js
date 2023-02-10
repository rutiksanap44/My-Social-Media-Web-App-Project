const express = require('express');

const app = express();

const port = 1023;

app.use('/',require('./routes'));



app.listen(port,function(err){
    if(err){
        console.log(`Error in running the Server : ${err}`);
    }
    console.log(`Server is Up and Running on the Server ${port}`);
});