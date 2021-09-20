import "./TaskItem.css";

const TaskItem = (props) => {
  const task = props.task;
  return (
    <div className={`task-item ${task.checked && "checked"}`}>
      <input onChange={props.checkHandler} className="task-item__checked" checked={task.checked} type="checkbox"></input>
      <h3 className="task-item__title">{task.title}</h3>
      <span onClick={props.deleteHandler} className="task-item__trash dashicons dashicons-trash" />
    </div>
  );
};

export default TaskItem;
