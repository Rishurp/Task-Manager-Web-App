const { taskService } = require("../services");

getTask = async (req, res) => {
  let response = await taskService.getTask();
  res.status(200).send(response);
};
addTask = async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const createdOn = new Date(`${req.body.createdOn}`);
    console.log(createdOn);
  const deadline = new Date(`${req.body.deadline}`);
  let response = await taskService.addTask({
    title: title,
    description: description,
    createdOn: createdOn,
    deadline: deadline,
  });
  res.status(201).send(response);
};
module.exports = {
  getTask,
  addTask,
};
