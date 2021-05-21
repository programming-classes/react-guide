import TaskItem from "./TaskItem";
import InputComponent from "./InputComponent";

const App = () => {
  return (
    <div>
      <h1>Hi there I'll be a TO DO list app</h1>

      <InputComponent />
      <TaskItem title="Terminar mates" />
      <TaskItem title="Llamar a la abuela" />
      <TaskItem title="Recoger la habitación" />
    </div>
  );
};
export default App;
