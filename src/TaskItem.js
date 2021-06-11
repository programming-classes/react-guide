import "./TaskItem.css";

const TaskItem = (props) => {
  return (
    <div className="task-item">
      <input className="task-item__checked" type="checkbox"></input>
      <h3 className="task-item__title">{props.title}</h3>
      <span className="task-item__trash dashicons dashicons-trash" />
    </div>
  );
};

export default TaskItem;
