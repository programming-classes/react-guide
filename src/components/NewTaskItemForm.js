import { useState } from "react/cjs/react.development";
import "./NewTaskItemForm.css";

const NewTaskItemForm = (props) => {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDueDate, setNewTaskDueDate] = useState("");
  const [newTaskOwner, setNewTaskOwner] = useState(props.owners[0]);

  const newTaskTitleChangeHandler = (event) => {
    setNewTaskTitle(event.target.value);
  };
  const newTaskDueDateHandler = (event) => {
    setNewTaskDueDate(event.target.value);
  }
  
  const newTaskOwnerHandler = (event) =>{
    setNewTaskOwner(event.target.value);
  }
  
  const onSubmitHandler = (event) => {
    event.preventDefault();

    props.newTaskItemHandler({ title: newTaskTitle, owner: newTaskOwner, dueDate: newTaskDueDate });
  };

  return (
    <form className="input-component" onSubmit={onSubmitHandler}>
      <div>
        {newTaskTitle.length == 0 ? null : (
          <label htmlFor="newTaskTitleInput">New task title</label>
        )}
        <input
          onChange={newTaskTitleChangeHandler}
          className="input-component__input"
          type="text"
          id="newTaskTitleInput"
          placeholder="New task title"
        />
      </div>
      <div>
        <label htmlFor="newTaskDueDateInput">New task due date</label>
        <input onChange={newTaskDueDateHandler} type="date" id="newTaskDueDateInput" />
      </div>
      <select onChange={newTaskOwnerHandler} name="ownerName">
        {props.owners.map((owner) => (
          <option value={owner} selected={owner === newTaskOwner}>{owner}</option>
        ))}
      </select>
      <input
        type="submit"
        className="input-component__button"
        value="whatever"
      />
    </form>
  );
};

export default NewTaskItemForm;
