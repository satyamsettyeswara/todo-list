const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    taskname:{
        type:String,
        required:true
    },
    taskdate:{
        type:String,
        required:true
    },
    tasktype:{
        type:String,
        required:true
    }
});
console.log('database---------------');
const todo = mongoose.model('todo',todoSchema);

module.exports = todo;