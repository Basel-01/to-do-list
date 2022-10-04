const Task = ({task, onDelete, onToggle}) => {
  return (
    <div key={task.id} className={task.reminder ? "task reminder" : "task"} onClick={() => onToggle(task.id)}>
      <div className="task-text">
        <h3>{task.text}</h3>
        <p>{task.day}</p>
      </div>
      <i className="fa-solid fa-xmark close" onClick={(e) => {
        e.stopPropagation()
        return onDelete(task.id)
      }}></i>
    </div>
  )
}

export default Task