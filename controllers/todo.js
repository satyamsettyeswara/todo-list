tasklist =[
    {            
        taskname:'Add your task',
        tasktype:'work type',
        taskdate:'dd/mmm/yyyy'        
    }     
]
// module.exports
const db = require('../config/mongoose');
const todo = require('../models/tasks');
//home page
module.exports.main = function(req,res){
    todo.find({},function(err,tasks){
        if(err){
            console.log('error in fetching data');
            return;
        }                            
        return res.render('home',{
            tasklist:tasks        
        });
    });    
};
//create task 
module.exports.create1 = function(req,res){
    // tasklist.push({
    //     taskname:req.body.desc,
    //     taskdate:req.body.duedate,
    //     tasktype:req.body.categ
    // });   
    todo.create({
        taskname:req.body.desc,
        taskdate:req.body.duedate,
        tasktype:req.body.categ
    },function(err,newList){
        if(err){
            console.log('err in creating list');
            return res.redirect('back');
        }
        console.log(newList);
        return res.redirect('back');
    });    
};
//delete task from todo list
module.exports.delete = function(req,res){
    let id = req.query.id
    todo.findByIdAndDelete(id,function(err){
        if(err){
            console.log('No able to delete error found');
        }
        return res.redirect('back');
    });    
};