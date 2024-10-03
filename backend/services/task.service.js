const {Task} = require("../models");

const addTask = async(data) => {
    const response = await Task.create(data);
    return response;
}
const getTask= async() => {
    const response = await Task.find() ;
    return response;
}

module.exports = {
    addTask,
    getTask
}