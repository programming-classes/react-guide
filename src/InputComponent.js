import "./InputComponent.css";

const InputComponent = (props) => {
  return (
    <div className="input-component">
      <input onChange={props.taskTitleChangeHandler} className="input-component__input" type="text" />
      <button onClick={props.newTaskItemHandler} className="input-component__button">Add</button>
    </div>
  );
};

export default InputComponent;
