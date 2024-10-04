const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true
    },
    status : {
       type : String ,
       enum : ['TODO', 'DONE'],
       default : "TODO",
        required : true
    },
    linkedFile : {
        type : Buffer,
        required : false,
        contentType : String
    },
    createdOn : {
        type : Date,
        required : true
    },
    deadline : {
        type : Date,
        required : true 
    }
});

const Task = mongoose.model("Task", taskSchema)

module.exports.Task = Task;