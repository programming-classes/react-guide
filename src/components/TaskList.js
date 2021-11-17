import TaskItem from "./TaskItem"

const TaskList = ({tasks, filter, onDeleteTaskHandler, onCheckTaskHandler}) =>{
    return (<div>
        {tasks
        .filter((task) => task.title.toUpperCase().includes(filter.title.toUpperCase()))
        .map((task) => (
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