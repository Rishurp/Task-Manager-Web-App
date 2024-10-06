import TaskTable from "./TaskTable";
import { useState } from "react";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";
import TaskForm from "./TaskForm";
const TaskManager = () => {
  const [task, setTask] = useState(["task"]);
  const [isModelOpen, setModel] = useState(false);

  const handleTaskModel = () => {
    setModel(!isModelOpen)
  }
  console.log(isModelOpen)
 
  return (
    <div className="  w-full h-full relative">
      {task.length > 0 ? (
        <TaskTable />
      ) : (
        <div className="flex items-center w-full h-full justify-center font-semibold text-2xl">
          <div>No Task Found !</div>
        </div>
      )}
      <div className=" absolute bottom-24 right-4 ">
        <AddCircleSharpIcon
          style={{ color: " #3b82f6", width: "6rem", height: "3rem" }}
          onClick={handleTaskModel}
        />
      </div>
      {isModelOpen ? ( <TaskForm/>) : ""}
    </div>
  );
};

export default TaskManager;
