const { taskService } = require("../services");

getTask = async (req, res) => {
  try {
    let response = await taskService.getTask();
    res.status(200).send(response);
  } catch (error) {
    return error;
  }
};
addTask = async (req, res) => {
  try {
    const title = req.body.title;
    const description = req.body.description;
    const deadline = new Date(`${req.body.deadline}`);
    const linkedFile = req.file
      ? { data: req.file.buffer, contentType: req.file.mimetype }
      : null;

    let response = await taskService.addTask({
      title: title,
      description: description,
      linkedFile: linkedFile,
      deadline: deadline,
    });
    res.status(201).send(response);
  } catch (error) {
    return error;
  }
};

updateTask = async (req, res) => {
  try {
    const id = req.params.id;
    const payload = req.body;
    const response = await taskService.updateTask(id, payload);
    res.status(200).send({ msg: "Updated successfully" });
  } catch (error) {
    return error;
  }
};

deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await taskService.deleteTask(id);
    res.status(200).send({ msg: "deleted successfully" });
  } catch (error) {
    return error;
  }
};
module.exports = {
  getTask,
  addTask,
  updateTask,
  deleteTask,
};
// {
//   title: title,
//   description: description,
//   createdOn: createdOn,
//   deadline: deadline,
// }
