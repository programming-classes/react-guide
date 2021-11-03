import "./App.css";
import TaskItem from "./components/TaskItem";
import NewTaskItemForm from "./components/NewTaskItemForm";
import React, { useState } from "react";
import FilterTasks from "./components/FilterTasks";
import TaskList from "./components/TaskList";

const DUMMY_TASKS = [
  {
    id: "sdf",
    dueDate: "2021-10-02",
    owner: "Mesi",
    title: "Terminar mates",
    checked: false,
  },
  {
    id: "ap.",
    dueDate: "2021-10-02",
    owner: "Mesi",
    title: "Llamar a la abuela",
    checked: true,
  },
  {
    id: "wer",
    dueDate: "2021-10-02",
    owner: "Fooan",
    title: "Recoger la habitación",
    checked: false,
  },
];
const DUMMY_OWNERS = ["Mesi", "Padre Baez", "Fooaquin"];

const App = () => {
  const [tasks, setTasks] = useState(DUMMY_TASKS);
  const [ownwers] = useState(DUMMY_OWNERS);

  const deleteTaskHandler = (taskId) => {
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

  const newTaskItemHandler = (newTaskItem) => {
    const newTaskList = [
      { ...newTaskItem, id: Math.random(), checked: false },
      ...tasks,
    ];
    setTasks(newTaskList);
  };

  return (
    <div className="app">
      <NewTaskItemForm
        owners={ownwers}
        newTaskItemHandler={newTaskItemHandler}
      />
      <FilterTasks/>
      <TaskList tasks={tasks}
      onDeleteTaskHandler={deleteTaskHandler}
        onCheckTaskHandler={checkTaskHandler}
      />
    </div>
  );
};
export default App;
