import TaskItem from "./TaskItem";

const TaskList = ({ tasks, filter, deleteTaskHandler, checkTaskHandler }) => {
  const matchTitle = (filter) => (task) =>
    task.title.toLowerCase().includes(filter.toLowerCase());
  const filteredTasks =
    filter.length > 0 ? tasks.filter(matchTitle(filter)) : tasks;
  return (
    <div className="task-items">
      {filteredTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteHandler={() => deleteTaskHandler(task.id)}
          checkHandler={() => checkTaskHandler(task.id)}
        />
      ))}
    </div>
  );
};
export default TaskList;
