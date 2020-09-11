const express = require('express');
const port = 8000;

const app = express();
//route
app.use(express.urlencoded());
app.use('/',require('./routes'));

//set engine
app.set('view engine','ejs');
app.set('views','./views');
//static files

app.use(express.static('assets'));
app.listen(port,function(err){
    if(err){
        console.log(`Error in connectin port${err}`);
    }
    console.log('Server is running on port:',port);
});