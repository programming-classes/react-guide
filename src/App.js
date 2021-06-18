import "./App.css";
import TaskItem from "./TaskItem";
import InputComponent from "./InputComponent";
import React, { useState } from "react";

function myFunction(myArgument) {
  return "MyReturn";
}
const App = () => {
  const [taskItems, setTaskItems] = useState([
    { title: "Terminar mates" },
    { title: "Llamar a la abuela" },
    { title: "Recoger la habitación" },
  ]);
  return (
    <div className="app">
      <InputComponent />
      <div className="task-items">
        {taskItems.map(taskItem => <TaskItem title={taskItem.title} />)}
      </div>
    </div>
  );
};
export default App;
