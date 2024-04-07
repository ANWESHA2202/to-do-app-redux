//hooks import
import { connect, useDispatch } from "react-redux";
import { useState } from "react";
//ui helpers import from lib
import { Button, TextField, Typography } from "@mui/material";
//redux import
import { modifyTasks } from "../src/app/redux/slices/todoSlice";
//utility functions import
import { isTaskExisting } from "../components/utils";

const AddTask = ({ tasks }) => {
  //hook instances
  const dispatch = useDispatch();

  //define states
  const [isExistingTask, setIsExistingTask] = useState(false);
  const [taskDesc, setTaskDesc] = useState("");
  const [taskTitle, setTaskTitle] = useState("");

  //action handler functions
  const addNewTask = async () => {
    let isTaskExists = isTaskExisting(tasks, taskTitle);
    if (isTaskExists) {
      setIsExistingTask(true);
      return;
    }
    let newTasks = structuredClone(tasks);
    const newTask = {
      title: taskTitle,
      description: taskDesc,
      status: "todo",
      createdAt: new Date(),
    };
    newTasks.push(newTask);
    dispatch(modifyTasks(newTasks));
    setTaskTitle("");
    setTaskDesc("");
  };
  const handleTaskTitleChange = (title) => {
    setTaskTitle(title);
    let isExisting = isTaskExisting(tasks, title);
    if (!isExisting) {
      setIsExistingTask(false);
    } else {
      setIsExistingTask(true);
    }
  };

  return (
    <div className="addTaskContainer">
      <div className="addTaskContent">
        <div className="titleSection">
          <Typography variant="h5" color="dark">
            Add task
          </Typography>
        </div>
        <div className="addTaskForm">
          <div>
            <Typography variant="subtitle2">Task Title</Typography>
            <TextField
              value={taskTitle}
              fullWidth
              placeholder="Enter Task Title"
              onChange={(e) => handleTaskTitleChange(e.target.value)}
            />
          </div>
          <div>
            <Typography variant="subtitle2">Task Description</Typography>
            <TextField
              placeholder="Enter Task Description"
              value={taskDesc}
              onChange={(e) => setTaskDesc(e.target.value)}
              multiline
              fullWidth
              minRows={4}
            />
          </div>
          <Button
            disabled={isExistingTask}
            fullWidth
            onClick={() => addNewTask()}
          >
            Add Task
          </Button>
          {isExistingTask ? (
            <p>Task with this title already is in todo</p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default connect(({ todo }) => ({ tasks: todo.tasks }))(AddTask);
