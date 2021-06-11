import "./App.css";
import TaskItem from "./TaskItem";
import InputComponent from "./InputComponent";

const App = () => {
  return (
    <div className="app">
      <InputComponent />
      <div className="task-items">
        <TaskItem title="Terminar mates" />
        <TaskItem title="Llamar a la abuela" />
        <TaskItem title="Recoger la habitación" />
      </div>
    </div>
  );
};
export default App;
