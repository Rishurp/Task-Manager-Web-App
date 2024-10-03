const {Task} = require("../models");

const addTask = async(data) => {
    const response = await Task.create(data);
    return response;
}
const getTask= async() => {
    const response = await Task.find() ;
    return response;
}

const updateTask = async (id,updateData) => {
const task = await Task.findByIdAndUpdate(id,updateData)
return task;
}

const deleteTask = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    return task;
}

module.exports = {
    addTask,
    getTask,
    updateTask,
    deleteTask
}