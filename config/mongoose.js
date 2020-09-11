const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo_list_db');

const db = mongoose.connection;

db.on('error',console.error.bind(console,'error connection to database'));

db.once('open',function(){
    console.log('Succes database connection');
});