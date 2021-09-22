import "./App.css";
import TaskItem from "./components/TaskItem";
import NewTaskItemForm from "./components/NewTaskItemForm";
import React, { useState } from "react";

function myFunction(myArgument) {
  return "MyReturn";
}
const App = () => {
  const [taskTitle, setTaskTitle] = useState("Add a new task");
  const [tasks, setTasks] = useState([
    { id: "sdf", title: "Terminar mates", checked: false },
    { id: "ap.", title: "Llamar a la abuela", checked: true },
    { id: "wer", title: "Recoger la habitación", checked: false },
  ]);

  const deleteTask = (taskId) => {
    const tasksCopy = [...tasks];
    const indexToDelete = tasksCopy.findIndex((task) => task.id === taskId);
    tasksCopy.splice(indexToDelete, 1);
    setTasks(tasksCopy);
  };

  const checkTaskHandler = (taskId) => {
    const tasksCopy = [...tasks];
    const taskToCheck = tasksCopy.find((task) => task.id === taskId);
    taskToCheck.checked = !taskToCheck.checked;
    setTasks(tasksCopy);
  };

  const taskTitleChangeHandler = (event) => {
    setTaskTitle(event.target.value);
  };

  const newTaskItemHandler = () => {
    const newTaskList = [
      { id: Math.random(), title: taskTitle, checked: false },
      ...tasks,
    ];
    setTasks(newTaskList);
  };

  return (
    <div className="app">
      <NewTaskItemForm
        taskTitleChangeHandler={taskTitleChangeHandler}
        newTaskItemHandler={newTaskItemHandler}
      />
      <div className="task-items">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteHandler={() => deleteTask(task.id)}
            checkHandler={() => checkTaskHandler(task.id)}
          />
        ))}
      </div>
    </div>
  );
};
export default App;
