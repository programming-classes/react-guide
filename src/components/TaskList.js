import TaskItem from "./TaskItem"
const TaskList = ({tasks, onDeleteTaskHandler, onCheckTaskHandler}) =>{
    return (<div>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteHandler={() => onDeleteTaskHandler(task.id)}
            checkHandler={() => onCheckTaskHandler(task.id)}
          />
        ))}
    </div>)
}

export default TaskList;