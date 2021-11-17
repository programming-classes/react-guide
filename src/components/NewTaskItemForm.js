import { useState } from "react";
import "./NewTaskItemForm.css";

const NewTaskItemForm = (props) => {

  const [newTaskItem, setNewTaskItem] = useState({title: "", dueDate: "", owner: props.owners[0]})
  
  const newTaskTitleChangeHandler = (event) => {
    setNewTaskItem({...newTaskItem, title: event.target.value});
  };
  const newTaskDueDateHandler = (event) => {
    setNewTaskItem({...newTaskItem, dueDate: event.target.value});
  }
  
  const newTaskOwnerHandler = (event) =>{
    setNewTaskItem({...newTaskItem, owner: event.target.value});
  }
  
  const onSubmitHandler = (event) => {
    event.preventDefault();

    props.newTaskItemHandler(newTaskItem);
    setNewTaskItem({ title:"", dueDate:"", owner: props.owners[0]})
  };

  return (
    <form className="input-component" onSubmit={onSubmitHandler}>
      <div>
        {newTaskItem.title.length === 0 ? null : (
          <label htmlFor="newTaskTitleInput">New task title</label>
        )}
        <input
          onChange={newTaskTitleChangeHandler}
          className="input-component__input"
          type="text"
          id="newTaskTitleInput"
          placeholder="New task title"
          value={newTaskItem.title}
        />
      </div>
      <div>
        <label htmlFor="newTaskDueDateInput">New task due date</label>
        <input onChange={newTaskDueDateHandler} type="date" id="newTaskDueDateInput" value={newTaskItem.dueDate}/>
      </div>
      <select value={newTaskItem.owner} onChange={newTaskOwnerHandler} name="ownerName">
        {props.owners.map((owner) => (
          <option key={owner} value={owner} >{owner}</option>
        ))}
      </select>
      <input
        type="submit"
        disabled={newTaskItem.title === ""}
        className="input-component__button"
        value="add"
      />
    </form>
  );
};

export default NewTaskItemForm;
