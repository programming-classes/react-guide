const TaskItem = (props) => {
  return (
    <div>
      <input type="checkbox"></input>
      <h3>{props.title}</h3>
      <span class="dashicons dashicons-trash"></span>
    </div>
  );
};

export default TaskItem;
